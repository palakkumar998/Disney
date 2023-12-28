/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.cdnlogo.com/logos/d/46/disney.svg"
            }
        ]
    }
}

module.exports = nextConfig
