/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
