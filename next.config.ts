import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};
module.exports = {
  images: {
    domains: ["cdn.dummyjson.com", "via.placeholder.com"],
  },
  productionBrowserSourceMaps: false
};


export default nextConfig;
