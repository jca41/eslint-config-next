**Deprecated**

## Eslint

In `.eslintrc.json`:

`{
  "extends": "@jpcafe/eslint-config-next"
}`

Don't forget to install `eslint-config-next` on your nextjs project.

## Prettier

In `.prettierrc.js`:

`module.exports = require('@jpcafe/eslint-config-next/prettier.config')
`

## Stylelint

In `stylelint.config.js`:

`module.exports = require('@jpcafe/eslint-config-next/stylelint.config');
`
