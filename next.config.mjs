// next.config.mjs
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add Node.js polyfills
    config.plugins.push(new NodePolyfillPlugin());

    // Ensure process and buffer are polyfilled
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      })
    );
    // Resolve node: scheme imports
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: resolve("buffer/"),
    };

    return config;
  },
};

export default nextConfig;
