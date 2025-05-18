/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["192.168.1.68"],
  },
  async rewrites() {
    return [
      {
        source: "/backend_api/:path*",
        destination: "http://192.168.1.68:8000/api/:path*/",
      },
    ];
  },
};

export default nextConfig;
