/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images:{
    domains:[
      "upload.wikimedia.org",
      "firebasestorage.googleapis.com",
      "platform-lookaside.fbsbx.com",
      "links.papareact.com"
    ]
  }
}
