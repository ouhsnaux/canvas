module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'always',
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
};
