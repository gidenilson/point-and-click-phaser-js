const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/game.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
