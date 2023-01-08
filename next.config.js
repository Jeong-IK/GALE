/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        PUBLIC_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
