module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    "react/react-in-jsx-scope": 0,
    quotes: [0, "single"],
    "react/no-unstable-nested-components": ["off", { allowAsProps: true }],
  },
};
