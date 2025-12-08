/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // This is the magic line
  trailingSlash: true,     // Helps GitHub Pages with routing
  images: {
    unoptimized: true      // GitHub Pages doesn’t support Next Image optimization
  }
};



export default nextConfig;
