/** @type {import('next').NextConfig} */
/* const { resolve } = require("path")
require("dotenv").config() */

const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages :[
      "@next-auth/firebase-adapter",
      "microcms-js-sdk"
    ]
  },
  images: {
    domains: ["lh3.googleusercontent.com","daisyui.com","images.microcms-assets.io"]
  },
  /* env: {
    CMS_API_KEY: process.env.MICROCMS_API_KEY
  }*/
}

module.exports = nextConfig
