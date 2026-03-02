import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: 'export',
  // Mengatur basePath dan assetPrefix untuk GitHub Pages
  basePath: '/portofolio',  // Gantilah 'portofolio' dengan nama repo Anda
  assetPrefix: '/portofolio/', // Gantilah 'portofolio' dengan nama repo Anda

  // Properti yang benar untuk trailing slash
  trailingSlash: true,
};

export default nextConfig;