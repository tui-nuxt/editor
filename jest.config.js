module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: 'test/spec/**/*.spec.ts',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  globals: {
    'js-jest': {
      enableTsDiagnostics: true
    }
  }
};
