/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
   // Basic settings
   output: "export",
   reactStrictMode: true, // Enable strict mode
   swcMinify: true, // Use the SWC compiler for minification

   images: {
      unoptimized: true,
   },

   // Output file tracing for serverless functions
   outputFileTracing: true,

   // trailingSlash: true,

   // basePath: "/niserc20test",
};

export default nextConfig;
