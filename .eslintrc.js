module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // prop-types error removed
    'react/react-in-jsx-scope': 'off', // import React error removed
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
