import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your actual image domain
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60
},
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
}
},
  webpack(config) {
    
    return config;
  },
  env: {
    BRAND_NAME: 'luxury FashionTV cosmetics',
    PRIMARY_COLOR: '#FFC0CB', // Pink
    SECONDARY_COLOR: '#FFFFFF', // White
  }
});