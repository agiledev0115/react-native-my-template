module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^_(.+)': './src/\\1',
        },
        extensions: ['.android.js', '.ios.js', '.js', '.json', '.native'],
      },
    ],
  ],
};
