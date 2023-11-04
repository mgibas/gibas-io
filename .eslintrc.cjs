module.exports = {
  extends: ['plugin:astro/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
  },
}
