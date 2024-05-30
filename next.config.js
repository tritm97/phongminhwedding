/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|mp3)$/i,
      type: "asset",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    return config;
  },
  // experimental: {
  //   fontLoaders: [
  //     { loader: '@next/font/google', options: { subsets: ['latin'] } },
  //   ],
  // },
};

module.exports = nextConfig;
