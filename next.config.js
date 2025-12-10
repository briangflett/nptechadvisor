const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Force port 3001 for development
  env: {
    PORT: '3001',
  },
  // Configure Turbopack for MDX support
  turbopack: {
    rules: {
      '*.mdx': {
        loaders: ['@mdx-js/loader'],
        as: '*.js',
      },
    },
  },
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
