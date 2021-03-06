module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    config.module.rules.push({
      test: /\.md$/,
      use: ['markdown-with-front-matter-loader'],
    });
    return config;
  },
  poweredByHeader: false,
};
