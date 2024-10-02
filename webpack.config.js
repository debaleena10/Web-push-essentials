const path = require('path');

module.exports = {
  mode: 'production',  // 'development' for unminified output or 'production' for optimized bundle
  entry: './firebase-setup.js',  // Entry point of your Firebase setup file
  output: {
    filename: 'firebase-bundle.js',  // Output bundle filename
    path: path.resolve(__dirname, 'dist'),  // Output directory (can change based on your setup)
    library: 'firebaseUtils',  // Global variable name when you include the bundle in a script
    libraryTarget: 'var',  // Defines how the library will be exposed
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,  // Test for JavaScript files
        exclude: /(node_modules)/,  // Exclude node_modules
        use: {
          loader: 'babel-loader',  // Use Babel to transpile ES6 to ES5
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
