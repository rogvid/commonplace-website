import { notFound } from 'next/navigation';
import { ContentTypeInfo, getContentMetadata } from '@/app/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function NotePage({ params: { type, slug } }) {
  if (!ContentTypeInfo[type]) {
    console.error('Invalid content type:', type);
    notFound();
  }

  const post = await getContentMetadata(type, slug);
  const contentType = ContentTypeInfo[type];

  if (!post) {
    console.error('Post not found:', { type, slug });
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{contentType.icon}</span>
              <span className={`text-sm font-medium text-${contentType.color}-600 dark:text-${contentType.color}-400`}>
                {contentType.label}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 bg-${contentType.color}-50 dark:bg-${contentType.color}-900/20 
                      text-${contentType.color}-600 dark:text-${contentType.color}-400 rounded-full text-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
} 