module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mail/image.gif',
        destination: 'https://checkout.mammut/mail/image.gif',
        permanent: true,
      },
    ]
  },
}
