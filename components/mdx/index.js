import Image from 'next/image';
import Link from 'next/link';

export const components = {
  // Typography
  h1: (props) => (
    <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-3xl font-bold mb-4 mt-8" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-bold mb-3 mt-6" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  
  // Lists
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props) => (
    <li className="text-gray-800" {...props} />
  ),

  // Code
  code: (props) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-6 font-mono text-sm" {...props} />
  ),

  // Links
  a: ({ href, ...props }) => {
    if (href.startsWith('/')) {
      return <Link href={href} className="text-indigo-600 hover:text-indigo-800 underline" {...props} />;
    }
    return <a href={href} className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer" {...props} />;
  },

  // Images
  img: ({ src, alt, ...props }) => (
    <div className="relative w-full h-[400px] my-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        {...props}
      />
    </div>
  ),

  // Blockquotes
  blockquote: (props) => (
    <blockquote className="border-l-4 border-indigo-200 pl-4 italic my-4" {...props} />
  ),

  // Tables
  table: (props) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
  ),
  td: (props) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />
  ),
  tr: (props) => (
    <tr className="even:bg-gray-50" {...props} />
  ),
}; 