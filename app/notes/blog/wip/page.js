import Image from 'next/image';

export default function WIPPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src="/blog/wip-placeholder.png"
            alt="Work in Progress"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
        <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
          Work in Progress
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          This content is currently being developed. Please check back later!
        </p>
      </div>
    </div>
  );
} 