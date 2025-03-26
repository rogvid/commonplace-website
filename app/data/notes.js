// Content type definitions
export const ContentTypes = {
  BLOG: 'blog',
  REPORT: 'report',
  TIF: 'tif', // Things I Found
  TIL: 'til', // Things I Learned
  REVIEW: 'review'
};

export const ContentTypeInfo = {
  [ContentTypes.BLOG]: {
    label: 'Blog Post',
    description: 'Long-form articles and project deep-dives',
    icon: '📝',
    color: 'indigo'
  },
  [ContentTypes.REPORT]: {
    label: 'Report',
    description: 'Technical reports, studies, papers, and analysis',
    icon: '📊',
    color: 'blue'
  },
  [ContentTypes.TIF]: {
    label: 'Things I Found',
    description: 'Interesting discoveries and quick thoughts',
    icon: '🔍',
    color: 'emerald'
  },
  [ContentTypes.TIL]: {
    label: 'Things I Learned',
    description: 'Learning notes and insights',
    icon: '💡',
    color: 'amber'
  },
  [ContentTypes.REVIEW]: {
    label: 'Review',
    description: 'Reviews of books, movies, videos, and games',
    icon: '⭐',
    color: 'purple'
  }
};

export const notes = [
  {
    title: 'Building My Portfolio Website',
    excerpt: 'A detailed look at how I built this portfolio website using Next.js, React, and Tailwind CSS. Learn about the design decisions, implementation challenges, and solutions.',
    date: 'Mar 25, 2024',
    tags: ['Web', 'Next.js', 'React', 'Tailwind CSS'],
    readTime: '8 min',
    slug: 'building-my-portfolio-website',
    contentType: ContentTypes.BLOG,
    isProjectPost: true,
    projectId: 'Personal Portfolio Website'
  },
  {
    title: 'Analysis: Impact of AI on Developer Productivity',
    excerpt: 'A technical analysis of how AI tools like GitHub Copilot and ChatGPT affect developer productivity, with data and case studies.',
    date: 'Mar 20, 2024',
    tags: ['AI', 'Research', 'Developer Tools'],
    readTime: '15 min',
    slug: 'ai-developer-productivity-analysis',
    contentType: ContentTypes.REPORT
  },
  {
    title: 'Interesting Pattern: The Builder Pattern in TypeScript',
    excerpt: 'Found a great example of the Builder pattern implementation in TypeScript that simplifies complex object creation.',
    date: 'Mar 18, 2024',
    tags: ['TypeScript', 'Design Patterns'],
    readTime: '3 min',
    slug: 'builder-pattern-typescript',
    contentType: ContentTypes.TIF
  },
  {
    title: 'TIL: Optimizing React Re-renders',
    excerpt: 'Today I learned about some non-obvious ways React components can trigger unnecessary re-renders and how to fix them.',
    date: 'Mar 15, 2024',
    tags: ['React', 'Performance'],
    readTime: '5 min',
    slug: 'react-rerender-optimization',
    contentType: ContentTypes.TIL
  },
  {
    title: 'Book Review: "Clean Architecture" by Robert C. Martin',
    excerpt: 'My thoughts on Uncle Bob\'s Clean Architecture book and how its principles can be applied in modern web development.',
    date: 'Mar 10, 2024',
    tags: ['Books', 'Architecture', 'Clean Code'],
    readTime: '10 min',
    slug: 'clean-architecture-book-review',
    contentType: ContentTypes.REVIEW
  }
]; 