module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js)$',
  moduleFileExtensions: ['vue', 'js'],
  moduleNameMapper: {
    // Fix in order for vue-test-utils to work with Jest 28
    // https://github.com/vuejs/vue-test-utils/issues/1975
    '^@vue/test-utils$': require.resolve('@vue/test-utils'),
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['text', 'json-summary']
}
