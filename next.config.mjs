/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // If you later add product images hosted elsewhere.
      { protocol: 'https', hostname: '**' }
    ]
  }
};

export default nextConfig;
