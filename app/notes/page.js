import { ContentTypes, getAllContent } from '../lib/content';
import NotesPageClient from './NotesPageClient';

export default async function NotesPage() {
  const contentTypes = await Promise.all([
    getAllContent(ContentTypes.BLOG).then(content => ({ type: ContentTypes.BLOG, title: 'Blog Posts', content })),
    getAllContent(ContentTypes.REPORT).then(content => ({ type: ContentTypes.REPORT, title: 'Technical Reports', content })),
    getAllContent(ContentTypes.TIF).then(content => ({ type: ContentTypes.TIF, title: 'Things I Found', content })),
    getAllContent(ContentTypes.TIL).then(content => ({ type: ContentTypes.TIL, title: 'Things I Learned', content })),
    getAllContent(ContentTypes.REVIEW).then(content => ({ type: ContentTypes.REVIEW, title: 'Reviews', content })),
  ]);

  return <NotesPageClient initialContent={contentTypes} />;
} 