module.exports = {
  entry: {
    button: './src/button'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[hash].[chunkhash].js',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
