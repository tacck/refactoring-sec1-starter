module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'block-spacing': 'error',
    'func-call-spacing': ['error', 'never'],
    'no-multi-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
  },
}
