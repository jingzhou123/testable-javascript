module.exports = {
  entry: {
    'button': './src/button',
    'modal': './src/modal',
    'select_control': './src/select_control',
    'text_input': './src/text_input'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[hash].[chunkhash].js',
    path: __dirname + '/build',
    publicPath: '/'
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
