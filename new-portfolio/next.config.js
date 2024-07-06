/** @type {import('next').NextConfig} */
/* const { resolve } = require("path")
require("dotenv").config() */

const nextConfig = {
  experimental: {
    serverActions: true,
    typedRoutes: true
  },
  images: {
    domains: ["lh3.googleusercontent.com","daisyui.com","images.microcms-assets.io"]
  },
  transpilePackages :[
    "@next-auth/firebase-adapter",
    "microcms-js-sdk",
  ],
}

module.exports = nextConfig
