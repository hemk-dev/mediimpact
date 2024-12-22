/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["mediimpact.vercel.app"],
  },
};

export default nextConfig;
