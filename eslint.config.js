import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off',
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  vue: true,
})
