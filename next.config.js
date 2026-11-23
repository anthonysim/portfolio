module.exports = {
  reactStrictMode: true,
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asim-portfolio.s3.us-west-1.amazonaws.com',
      },
    ],
  },
}
