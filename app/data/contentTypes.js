export const ContentTypes = {
  BLOG: 'blog',
  REPORT: 'reports',
  TIF: 'tif',
  TIL: 'til',
  REVIEW: 'reviews',
};

export const ContentTypeInfo = {
  [ContentTypes.BLOG]: {
    label: 'Blog Posts',
    description: 'Long-form articles about development, design, and technology',
    icon: '📝',
    color: 'blue',
  },
  [ContentTypes.REPORT]: {
    label: 'Technical Reports',
    description: 'In-depth analysis, studies, and technical deep-dives',
    icon: '📊',
    color: 'purple',
  },
  [ContentTypes.TIF]: {
    label: 'Things I Found',
    description: 'Interesting discoveries, links, and quick thoughts',
    icon: '🔍',
    color: 'green',
  },
  [ContentTypes.TIL]: {
    label: 'Things I Learned',
    description: 'Personal learnings and insights',
    icon: '💡',
    color: 'yellow',
  },
  [ContentTypes.REVIEW]: {
    label: 'Reviews',
    description: 'Reviews of books, movies, videos, and games',
    icon: '⭐',
    color: 'orange',
  },
}; 