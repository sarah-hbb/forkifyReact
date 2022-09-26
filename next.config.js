/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['forkify-api.herokuapp.com','www.thedeliciouscrescent.com']
},
}

module.exports = nextConfig
