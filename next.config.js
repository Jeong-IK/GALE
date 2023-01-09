/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_BASE_URL: "http://175.212.160.106:7777",
      },
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
