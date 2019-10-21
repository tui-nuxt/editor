import { resolve } from 'path'
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: ['../../lib/index'],
  buildModules: ['@nuxt/typescript-build'],
}

export default config
