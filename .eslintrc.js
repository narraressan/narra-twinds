module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'prettier',
    ],
    plugins: ['vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'vue/html-indent': ['error', 4],
        'no-unused-vars': 'warn',
        'no-undef': 'warn', // this may be critical in the future - remove when vue+eslint supports syntax sugar for `ref: foo = ...`
        'vue/no-unused-vars': 'warn',
    }
  }
  