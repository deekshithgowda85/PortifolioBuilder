module.exports = {
  reactStrictMode: true,
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.dicebear.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
