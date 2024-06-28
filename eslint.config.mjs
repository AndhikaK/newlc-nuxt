// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Other rules
    'vue/require-default-prop': 'off',
    '@stylistic/semi': 'off',
  },
})
// Your custom configs here
