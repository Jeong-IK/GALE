/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // NEXT_PUBLIC_BASE_URL: "http://175.212.160.106:7777",
        NEXT_PUBLIC_BASE_URL: "http://127.0.0.1:7777",
        NEXT_PUBLIC_KAKAOMAP_KEY: "415ac3ce5f6554d2dc2a8742a80b1397",
    },
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["page.tsx"],
    images: {
        domains: ["172.30.65.237"],
    },
};

module.exports = nextConfig;
