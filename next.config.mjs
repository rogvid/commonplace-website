import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    serverComponentsExternalPackages: ['gray-matter']
  },
  // Use static export for Hostinger deployment
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs' module on the client to prevent this error
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
    }
    return config
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig); 