import { ContentTypes, getAllContent } from '@/app/lib/content';
import NotesPageClient from '@/app/notes/NotesPageClient.js';

export default async function NotesPage() {
  const contentTypes = await Promise.all([
    getAllContent(ContentTypes.BLOG).then(content => ({
      type: ContentTypes.BLOG,
      title: 'Blog Posts',
      content
    })),
    getAllContent(ContentTypes.REPORT).then(content => ({
      type: ContentTypes.REPORT,
      title: 'Technical Reports',
      content
    })),
    getAllContent(ContentTypes.TIF).then(content => ({
      type: ContentTypes.TIF,
      title: 'Things I Found',
      content
    })),
    getAllContent(ContentTypes.TIL).then(content => ({
      type: ContentTypes.TIL,
      title: 'Things I Learned',
      content
    })),
    getAllContent(ContentTypes.REVIEW).then(content => ({
      type: ContentTypes.REVIEW,
      title: 'Reviews',
      content
    })),
  ]);

  if (!contentTypes || contentTypes.length === 0) {
    return <div>No content available</div>;
  }

  return <NotesPageClient initialContent={contentTypes} />;
} 