module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
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
        },
      },
    ],
  ],
};
