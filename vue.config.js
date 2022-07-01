module.exports = {
  publicPath: (process.env.TARGET === 'docs') ? '/consumption_buddy/' : '',
  outputDir: (process.env.TARGET === 'docs') ? 'docs/' : 'dist/',
  pwa: {
    themeColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
};
