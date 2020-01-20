module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: {
      global: 'UseMediaQueries',
      externals: {
        'react': 'React'
      }
    }
  }
}
