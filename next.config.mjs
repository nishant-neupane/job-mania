/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/backend_api/:path*",
        destination: "http://192.168.1.68:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
