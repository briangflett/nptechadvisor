const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Force port 3001 for development
  env: {
    PORT: '3001',
  },
  // Enable Turbopack (Next.js 16 default)
  turbopack: {},
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
