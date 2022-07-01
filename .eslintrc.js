module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": 0,
    "no-prototype-builtins": "off",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "jest/no-identical-title": "error",
  },
  overrides: [
    {
      files: ["*.test.js"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        // Nathan try to modify these
        quotes: "off",
        // semi: ["error", "never"],
      },
    },
  ],
}
