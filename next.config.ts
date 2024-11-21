import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'i.pinimg.com',
      'images.unsplash.com', // Added Unsplash domain
    ],
  },
}

export default nextConfig;

