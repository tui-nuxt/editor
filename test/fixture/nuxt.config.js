const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  rootDir: resolve(__dirname, '../../'),
  srcDir: resolve(__dirname),
  buildDir: resolve(__dirname, '../../.nuxt'),
  modules: [
    {
      handler: require('../../src/module.ts')
    }
  ],
  tui: {
    editor: {
      extensions: ['scrollSync', 'colorSyntax', 'uml', 'table', 'chart']
    }
  }
};
