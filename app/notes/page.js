import { getAllContent } from '../../lib/mdx';
import NotesPageClient from './NotesPageClient';

export default async function NotesPage() {
  const blogPosts = await getAllContent('blog');
  const reports = await getAllContent('reports');
  const tifs = await getAllContent('tif');
  const tils = await getAllContent('til');
  const reviews = await getAllContent('reviews');

  const contentTypes = [
    { type: 'blog', title: 'Blog Posts', content: blogPosts },
    { type: 'reports', title: 'Technical Reports', content: reports },
    { type: 'tif', title: 'Things I Found', content: tifs },
    { type: 'til', title: 'Things I Learned', content: tils },
    { type: 'reviews', title: 'Reviews', content: reviews },
  ];

  return <NotesPageClient initialContent={contentTypes} />;
} 