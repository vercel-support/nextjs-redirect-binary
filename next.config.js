module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/mail/image.jpg',
        destination: 'https://nextjs-binary-redirect.vercel-support.app/roman-mager-5mZ_M06Fc9g-unsplash.jpg',
      },
    ]
  },  
}
