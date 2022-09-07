/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['forkify-api.herokuapp.com']
},
}

module.exports = nextConfig
