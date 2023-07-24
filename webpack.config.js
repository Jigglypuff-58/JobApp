const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html', // Path to your template file
            filename: 'index.html', // Output filename
        })
    ],
    stats: {
        children: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        host: 'localhost',
        static: {
            directory: path.join(__dirname, 'client'),
            publicPath: '/'
        },
        hot: true,
        port: 8080,
        proxy: {
            '/': 'http://localhost:3000',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
