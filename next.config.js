module.exports = {
  reactStrictMode: false,
}

const webpack = (config, options) => {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name() {
        if (process.env.NODE_ENV === 'development') {
          return '[path][name].[ext]';
        }

        return '[contenthash].[ext]';
      },
      publicPath: `/_next/static/images`,
      outputPath: 'static/images',
    },
  });

  return config
}

module.exports = { webpack }
