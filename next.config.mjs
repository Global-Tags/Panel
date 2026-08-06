/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*'
            }
        ]  
    },
    async rewrites() {
        const rybbitHost = process.env.NEXT_PUBLIC_RYBBIT_HOST;
        if (!rybbitHost) {
            console.log("NEXT_PUBLIC_RYBBIT_HOST is not defined. Rybbit tracking will not work.");
            return [];
        }
        return [
            {
                source: "/api/script.js",
                destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/script.js`,
            },
            {
                source: "/api/track",
                destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/track`,
            },
            {
                source: "/api/identify",
                destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/identify`,
            },
            {
                source: "/api/replay.js",
                destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/replay.js`,
            },
            {
                source: "/api/site/:path*",
                destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/site/:path*`,
            },
            {
                source: "/api/session-replay/:path*",
                destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/session-replay/:path*`,
            },
        ]
    }
};

export default nextConfig;
