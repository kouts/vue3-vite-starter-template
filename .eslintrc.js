module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier-vue/recommended', 'prettier'],
  plugins: ['html'],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    // Disable certain rules here, e.g.
    // 'vue/multi-word-component-names': 'off',
  },
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser'
      }
    },
    {
      files: ['*.json'],
      rules: {
        quotes: [2, 'double']
      }
    },
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    },
    {
      // Disable multi-word-component-names for pages and layouts
      files: ['src/views/**/*.vue', 'src/layouts/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
