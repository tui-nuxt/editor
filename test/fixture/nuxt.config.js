const { resolve } = require('path')

module.exports = {
  mode: 'universal',
  rootDir: resolve(__dirname, '../../'),
  srcDir: resolve(__dirname),
  buildDir: resolve(__dirname, '../../.nuxt'),
  modules: [
    {
      handler: require('../../src')
    }
  ],
  tui: {
    editor: {
      extensions: ['scrollSync', 'colorSyntax', 'uml', 'table', 'chart']
    }
  }
}
