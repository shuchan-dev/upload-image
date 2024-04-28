/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qo4g5znyteiyevcu.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
