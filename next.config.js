// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'Xavier2p.github.io.' : '',
  images: {
    unoptimized: true,
  },
};
