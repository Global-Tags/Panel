/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
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
