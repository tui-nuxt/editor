module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  globals: {
    'js-jest': {
      enableTsDiagnostics: true
    }
  }
};
