module.exports = {
  output: 'standalone',
  images: {
    domains: ['imgholder.ru'],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots.txt',
      },
    ];
  },
};
