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
            }
        ]
    }
};

export default nextConfig;
