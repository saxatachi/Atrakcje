module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env',"@babel/preset-react"],
              plugins: [
                'transform-class-properties',
              ]
            }
          }},
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader','sass-loader',]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
      },{
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      
      ]
    }
  };