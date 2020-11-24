module.exports = {
  // root: true,
  extends: 'airbnb',
  plugins: [
    "react",
    "jsx-a11y",
    "react-native"
  ],
  env: {
    "jest": true
  },
  globals: {
    "__DEV__": true,
    "fetch": true
  },
  // parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    "import/no-unresolved": 0,
    "react/forbid-prop-types": 0,
    "import/prefer-default-export": 0,
    "no-console": 0,
    "max-len": 0,
    "no-confusing-arrow": 0,
  },
};
