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
    async redirects() {
        return [
            {
                source: "/legal/imprint",
                destination: "https://upndevelopment.de/impressum",
                permanent: false
            },
            {
                source: "/discord",
                destination: "https://discord.gg/uuxdGjpCkJ",
                permanent: false
            },
            {
                source: "/github",
                destination: "https://github.com/Global-Tags",
                permanent: false
            },
            {
                source: "/stats",
                destination: "https://metrics.rappytv.com/public-dashboards/0f26b754dcd348a09a98ed8d24175c6e?orgId=1",
                permanent: false
            }
        ]
    }
};

export default nextConfig;
