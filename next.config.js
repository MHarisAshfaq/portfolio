/** @type {import('next').NextConfig} */
const nextConfig = {
  async generateStaticPaths() {
    // Generate static paths as needed
    return {
      "/": { page: "/" },
      // Add other pages as needed
    };
  },
};

module.exports = nextConfig;
