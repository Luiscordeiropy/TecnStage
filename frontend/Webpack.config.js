const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do React
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[hash].[ext]', // Exemplo de como organizar as imagens no build final
            },
          }
        ]
      },
      {
        test: /\.js$/, // Para arquivos JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar o código
        },
      },
      {
        test: /\.css$/, // Para arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Arquivo HTML base
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'), // Altere contentBase para static
    port: 3000, // Porta do servidor de desenvolvimento
    hot: true, // Habilita Hot Module Replacement
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Suporte para JSX
  },
};
