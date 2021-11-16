/* eslint-disable comma-dangle */
module.exports = {
  root: true,
  env: { browser: true, node: true },
  parserOptions: { parser: '@babel/eslint-parser', requireConfigFile: false },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier', 'plugin:nuxt/recommended'],
  plugins: [],
  rules: { commaDangle: 0, spaceBeforeFunctionParen: 0, 'vue/valid-v-slot': 'off' },
}
