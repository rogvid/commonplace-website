import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

// Content type definitions (moved from notes.js)
export const ContentTypes = {
  BLOG: 'blog',
  REPORT: 'report',
  TIF: 'tif',
  TIL: 'til',
  REVIEW: 'review'
};

export const ContentTypeInfo = {
  [ContentTypes.BLOG]: {
    label: 'Blog Post',
    description: 'Long-form articles and project deep-dives',
    icon: '📝',
    color: 'indigo',
    directory: 'blog'
  },
  [ContentTypes.REPORT]: {
    label: 'Report',
    description: 'Technical reports, studies, papers, and analysis',
    icon: '📊',
    color: 'blue',
    directory: 'reports'
  },
  [ContentTypes.TIF]: {
    label: 'Things I Found',
    description: 'Interesting discoveries and quick thoughts',
    icon: '🔍',
    color: 'emerald',
    directory: 'tif'
  },
  [ContentTypes.TIL]: {
    label: 'Things I Learned',
    description: 'Learning notes and insights',
    icon: '💡',
    color: 'amber',
    directory: 'til'
  },
  [ContentTypes.REVIEW]: {
    label: 'Review',
    description: 'Reviews of books, movies, videos, and games',
    icon: '⭐',
    color: 'purple',
    directory: 'reviews'
  }
};

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all content files of a specific type
 */
export function getContentFiles(type) {
  const typeInfo = ContentTypeInfo[type];
  if (!typeInfo) throw new Error(`Invalid content type: ${type}`);

  const typeDirectory = path.join(contentDirectory, typeInfo.directory);
  if (!fs.existsSync(typeDirectory)) return [];

  const files = fs.readdirSync(typeDirectory);
  return files.filter(file => file.endsWith('.mdx') || file.endsWith('.md'));
}

/**
 * Get metadata and content for a specific content file
 */
export async function getContentMetadata(type, slug) {
  const typeInfo = ContentTypeInfo[type];
  if (!typeInfo) throw new Error(`Invalid content type: ${type}`);

  const mdxPath = path.join(contentDirectory, typeInfo.directory, `${slug}.mdx`);
  const mdPath = path.join(contentDirectory, typeInfo.directory, `${slug}.md`);
  
  let filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content: rawContent } = matter(fileContents);

  // Compile MDX content with plugins
  const { content } = await compileMDX({
    source: rawContent,
    options: {
      parseFrontmatter: false, // Disable frontmatter parsing in MDX
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, // Adds support for tables, strikethrough, task lists, etc.
        ],
        rehypePlugins: [
          rehypePrism, // Adds syntax highlighting
        ],
      },
    },
  });

  // Ensure frontmatter values are properly formatted
  const formattedFrontmatter = {
    title: frontmatter.title || '',
    excerpt: frontmatter.excerpt || '',
    date: frontmatter.date || '',
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    ...frontmatter, // Include any additional frontmatter fields
  };

  return {
    ...formattedFrontmatter,
    slug,
    contentType: type,
    content,
    // Calculate read time based on content length (rough estimate)
    readTime: `${Math.max(1, Math.ceil(rawContent.split(/\s+/).length / 200))} min`
  };
}

/**
 * Get all content of a specific type with metadata
 */
export async function getAllContent(type) {
  const files = getContentFiles(type);
  
  const allContent = await Promise.all(
    files.map(async filename => {
      const slug = filename.replace(/\.mdx?$/, '');
      const metadata = await getContentMetadata(type, slug);
      if (!metadata) return null;
      
      // Don't include the full content when listing all posts
      const { content, ...meta } = metadata;
      return meta;
    })
  );

  // Remove null entries and sort by date
  return allContent
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get all content across all types
 */
export async function getAllContentAcrossTypes() {
  const allContent = await Promise.all(
    Object.values(ContentTypes).map(type => getAllContent(type))
  );

  return allContent
    .flat()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get recent content across all types
 */
export async function getRecentContent(limit = 5) {
  const content = await getAllContentAcrossTypes();
  return content.slice(0, limit);
} 