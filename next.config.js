/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
