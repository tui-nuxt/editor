const { Nuxt, Builder } = require('nuxt')
jest.setTimeout(60 * 1000) // fix jest timeout error

let nuxt
describe('basic', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(require('../example/basic/nuxt.config'))
    await nuxt.ready()

    await new Builder(nuxt).build()

    await nuxt.listen()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('dummy', () => {
    expect('helloWorld').toEqual('helloWorld')
  })
})
