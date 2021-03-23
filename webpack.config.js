const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
});

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [htmlPlugin],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
