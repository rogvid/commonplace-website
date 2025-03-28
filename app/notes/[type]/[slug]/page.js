import { notFound } from 'next/navigation';
import { ContentTypeInfo, getContentMetadata, getAllContentAcrossTypes } from '@/app/lib/content';
import Link from 'next/link';

// Predefined color classes for each content type
const tagColorClasses = {
  'blog': 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
  'reports': 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  'tif': 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  'til': 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  'reviews': 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
};

const typeColorClasses = {
  'blog': 'text-indigo-600 dark:text-indigo-400',
  'reports': 'text-blue-600 dark:text-blue-400',
  'tif': 'text-emerald-600 dark:text-emerald-400',
  'til': 'text-amber-600 dark:text-amber-400',
  'reviews': 'text-purple-600 dark:text-purple-400'
};

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

  // Get all content sorted by date
  const sortedContent = await getAllContentAcrossTypes();

  // Find the current article's index
  const currentIndex = sortedContent.findIndex(
    (article) => article.slug === slug && article.contentType === type
  );

  // Get the next article (if it exists)
  const nextArticle = currentIndex > 0 ? sortedContent[currentIndex - 1] : null;
  // Get the previous article (if it exists)
  const previousArticle = currentIndex < sortedContent.length - 1 ? sortedContent[currentIndex + 1] : null;

  // Get the directory name from ContentTypeInfo for color class lookup
  const dirType = contentType.directory;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[88ch,35ch] gap-8 max-w-[125ch] mx-auto relative">
          <article className="min-h-[calc(100vh-8rem)] max-w-[88ch]">
                

            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-table:w-full 
              prose-table:border-collapse 
              prose-table:border-spacing-0
              prose-thead:bg-gray-50 
              prose-thead:dark:bg-gray-800
              prose-th:p-3 
              prose-th:text-left 
              prose-th:font-semibold
              prose-th:border 
              prose-th:border-gray-200 
              prose-th:dark:border-gray-700
              prose-td:p-3 
              prose-td:border 
              prose-td:border-gray-200 
              prose-td:dark:border-gray-700">
              {post.content}
            </div>
          </article>

          {/* Article Navigation */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 max-w-[35ch] space-y-8">
              {/* Frontmatter */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{contentType.icon}</span>
                  <span className={`text-sm font-medium ${typeColorClasses[dirType]}`}>
                    {contentType.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <h3 className="text-lg font-bold">{post.title}</h3>
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
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
                        className={`px-2.5 py-0.5 rounded-full text-sm ${tagColorClasses[dirType]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 text-sm pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">next:</span>
                  {nextArticle ? (
                    <Link 
                      href={`/notes/${nextArticle.contentType}/${nextArticle.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline truncate"
                    >
                      {nextArticle.title}
                    </Link>
                  ) : "No newer notes..."}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">previous:</span>
                  {previousArticle ? (
                    <Link 
                      href={`/notes/${previousArticle.contentType}/${previousArticle.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline truncate"
                    >
                      {previousArticle.title}
                    </Link>
                  ) : "No older notes..."}
                </div>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
} 