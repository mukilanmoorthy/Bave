/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizeCss: true,
  },

  async redirects() {
    return [
      {
        source: "/",           
        destination: "/dashboard", 
        permanent: true,      
      },
    ];
  },
};
