/** @type {import('next').NextConfig} */

const nextConfig = {
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/",
        // permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
