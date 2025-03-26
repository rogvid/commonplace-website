import { ContentTypes, getAllContent } from '../lib/content';
import NotesPageClient from './NotesPageClient';

export default async function NotesPage() {
  const contentTypes = [
    { type: ContentTypes.BLOG, title: 'Blog Posts', content: await getAllContent(ContentTypes.BLOG) },
    { type: ContentTypes.REPORT, title: 'Technical Reports', content: await getAllContent(ContentTypes.REPORT) },
    { type: ContentTypes.TIF, title: 'Things I Found', content: await getAllContent(ContentTypes.TIF) },
    { type: ContentTypes.TIL, title: 'Things I Learned', content: await getAllContent(ContentTypes.TIL) },
    { type: ContentTypes.REVIEW, title: 'Reviews', content: await getAllContent(ContentTypes.REVIEW) },
  ];

  return <NotesPageClient initialContent={contentTypes} />;
} 