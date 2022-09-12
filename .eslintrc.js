module.exports = {
  plugins: ['tailwindcss'],
  extends: ['plugin:astro/recommended', 'plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
    },
  ],
  settings: {
    tailwindcss: {
      config: 'tailwind.config.cjs',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
  },
}
