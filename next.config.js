/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["upload.wikimedia.org", "www.shareicon.net"]
  }
}

module.exports = nextConfig
