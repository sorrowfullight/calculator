const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', // Входная точка вашего приложения
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'dist'), // Папка для выхода
        clean: true, // Очищать выходную папку перед каждым сборкой
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Применять для всех файлов .js
                exclude: /node_modules/, // Исключить node_modules
                use: {
                    loader: 'babel-loader', // Использовать Babel
                    options: {
                        presets: ['@babel/preset-env'], // Пресеты Babel
                    },
                },
            },
            {
                test: /\.css$/, // Применять для всех файлов .css
                use: ['style-loader', 'css-loader'], // Использовать эти лоадеры
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
    devtool: 'source-map', // Генерация source maps
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
      },
    
      mode: 'development', // Режим сборки
    };