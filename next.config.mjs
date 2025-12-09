/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 this enables `next export`
  images: {
    unoptimized: true, // 👈 REQUIRED for static export
  },
  // Optional: Add trailing slashes for better compatibility with static hosting
  trailingSlash: true,
};

export default nextConfig;