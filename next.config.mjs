/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Disable image optimization globally
    },
    output: 'export'
};

export default nextConfig;
