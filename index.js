module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "simple-import-sort"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    'react/prop-types': 'off',
    "prettier/prettier": "error",
    "simple-import-sort/sort": "error"
  },
  "globals": {
    "React": "writable",
    "process": "readonly",
    "module": "readonly",
    "require": "readonly"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  overrides: [require('./index-ts')],
}
