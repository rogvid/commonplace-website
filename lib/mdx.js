import { readFileSync, readdirSync, existsSync } from 'fs';
import * as path from 'path';
import { join } from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import readingTime from 'reading-time';
import { ContentTypeInfo } from '@/app/data/contentTypes';
import mdxComponents from '@/app/components/mdx-components';

const contentDirectory = join(process.cwd(), 'content');

function getContentTypeFromPath(filePath) {
  const relativePath = path.relative(contentDirectory, filePath);
  const directory = relativePath.split(path.sep)[0];
  return directory;
}

export async function getContentBySlug(type, slug) {
  try {
    const fullPath = join(contentDirectory, type, `${slug}.mdx`);
    console.log('Attempting to read file:', fullPath);
    
    if (!existsSync(fullPath)) {
      console.error('File does not exist:', fullPath);
      return null;
    }

    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const { content: mdxContent } = await compileMDX({
      source: content,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrism, { showLineNumbers: true }]],
          format: 'mdx',
        },
      }
    });

    return {
      slug,
      frontmatter: {
        ...data,
        readingTime: readingTime(content),
      },
      content: mdxContent,
    };
  } catch (error) {
    console.error(`Error reading content for ${type}/${slug}:`, error);
    return null;
  }
}

export function getAllContentPaths(type) {
  try {
    const contentPath = join(contentDirectory, type);
    if (!existsSync(contentPath)) {
      console.error('Content directory does not exist:', contentPath);
      return [];
    }

    const fileNames = readdirSync(contentPath);
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => ({
        params: {
          slug: fileName.replace(/\.mdx$/, ''),
        },
      }));
  } catch (error) {
    console.error(`Error getting content paths for ${type}:`, error);
    return [];
  }
}

export function getAllContent(type) {
  try {
    const contentPath = join(contentDirectory, type);
    if (!existsSync(contentPath)) {
      console.error('Content directory does not exist:', contentPath);
      return [];
    }

    const fileNames = readdirSync(contentPath);
    const allContent = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = join(contentPath, fileName);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          frontmatter: {
            ...data,
            readingTime: readingTime(content),
          },
        };
      });

    return allContent.sort((a, b) => {
      if (a.frontmatter.date && b.frontmatter.date) {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      }
      return 0;
    });
  } catch (error) {
    console.error(`Error getting all content for ${type}:`, error);
    return [];
  }
} 