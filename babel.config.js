module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "@babel/plugin-transform-export-namespace-from",
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./app"],
        alias: {
          "@/components": "./app/components",
          "@/configs": "./app/configs",
          "@/models": "./app/models",
          "@/navigators": "./app/navigators",
          "@/screens": "./app/screens",
          "@/services": "./app/services",
          "@/themes": "./app/themes",
          "@/enums": "./app/enums",
          "@/utils": "./app/utils",
          "@/hooks": "./app/hooks",
          "@/libs": "./app/libs",
        },
      },
    ],
  ],
};
