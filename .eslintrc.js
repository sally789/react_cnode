module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['react', 'import'],
  rules: {
    semi: ['error', 'never'],
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 'off',
    'no-nested-ternary': 0,
    'import/no-cycle': 0,
    'no-alert': 0,
    'max-len': 0,
    camelcase: 0,
    'react/no-danger': 0,
    'react/function-component-definition': 0,
    'react/no-unstable-nested-components': 0,
    'linebreak-style': 0,
  },
}
