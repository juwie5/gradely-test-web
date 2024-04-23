module.exports = {
  root: true,
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@nuxt/eslint-config",
  ],
  "parserOptions": {
    "project": [
      "./tsconfig.json"
    ]
  },

  "rules": {
    "quotes": [
      "error",
      "double"
    ],
  }
}