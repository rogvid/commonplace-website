import Image from 'next/image';
import Link from 'next/link';

const components = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  a: ({ href, children }) => (
    <Link href={href} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline">
      {children}
    </Link>
  ),
  code: ({ children, className }) => {
    const language = className ? className.replace('language-', '') : '';
    return (
      <code className={`${className} rounded bg-gray-100 dark:bg-gray-800 px-1 py-0.5 text-sm`}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <div className="my-4">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
  ),
};

export default components; 