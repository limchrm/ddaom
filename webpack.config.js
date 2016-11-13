module.exports = {
  entry: './src/index.tsx',

  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extentions.
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx'],
  },

  module: {
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ],
    loaders: [
      // All files with a '.ts' or '.tsx' extentions will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'ts' },

      { test: /\.scss$/, loader: 'style!css!sass' },

      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'file' },
    ],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  devServer: {
    open: true,
  },
};
