import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
export function getContentMetadata(type, slug) {
  const typeInfo = ContentTypeInfo[type];
  if (!typeInfo) throw new Error(`Invalid content type: ${type}`);

  const mdxPath = path.join(contentDirectory, typeInfo.directory, `${slug}.mdx`);
  const mdPath = path.join(contentDirectory, typeInfo.directory, `${slug}.md`);
  
  let filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return {
    ...frontmatter,
    slug,
    contentType: type,
    content,
    // Calculate read time based on content length (rough estimate)
    readTime: `${Math.max(1, Math.ceil(content.split(/\s+/).length / 200))} min`
  };
}

/**
 * Get all content of a specific type with metadata
 */
export function getAllContent(type) {
  const files = getContentFiles(type);
  
  const allContent = files
    .map(filename => {
      const slug = filename.replace(/\.mdx?$/, '');
      const metadata = getContentMetadata(type, slug);
      if (!metadata) return null;
      
      // Don't include the full content when listing all posts
      const { content, ...meta } = metadata;
      return meta;
    })
    .filter(Boolean); // Remove null entries

  // Sort by date
  return allContent.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get all content across all types
 */
export function getAllContentAcrossTypes() {
  return Object.values(ContentTypes).reduce((acc, type) => {
    const content = getAllContent(type);
    return [...acc, ...content];
  }, []).sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get recent content across all types
 */
export function getRecentContent(limit = 5) {
  return getAllContentAcrossTypes().slice(0, limit);
} 