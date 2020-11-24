const resolver = require('babel-plugin-module-resolver');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      resolver,
      {
        root: ['./src/'],
        alias: {
          src: './src',
          apis: './src/apis',
          utils: './src/utils',
          forms: './src/forms',
          theme: './src/theme',
          configs: './src/configs',
          components: './src/components',
          containers: './src/containers',
          translations: './src/translations',
          platform: './src/theme/variables/platform',
          commonColor: './src/theme/variables/commonColor',
        },
      },
    ],
  ],
};
