module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@assets': './src/assets'
        },
      },
    ],
  ],
};
