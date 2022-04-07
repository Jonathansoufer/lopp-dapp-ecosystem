module.exports = function (api) {
  api.cache(true);
  return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
          'inline-dotenv',
          [
              'module-resolver',
              {
                  alias: {
                      assets: './src/assets',
                      components: './src/components',
                      helpers: './src/helpers',
                      navigator: './src/navigator',
                      services: './src/services',
                      styles: './src/styles',
                      views: './src/views',
                  },
              }
          ]
      ]
  };
};
