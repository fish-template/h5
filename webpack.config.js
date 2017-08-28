const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const pk = require('./package.json');
module.exports = function(env) {
    return merge(require(`./webpack.${env}.js`), {
        entry: {
            app: './src/app',
            vendor: Object.keys(pk.dependencies)
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            // publicPath: ''
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias: {
                '$': ''
            }
        },
        module: {
            rules: [{
                test: /\.(scss|css|sass)$/,
                use: env === 'dev' ? [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ] : ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: '[name].[hash:7].[ext]'
                    }
                }
            }, {
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env)
                }
            }),
            new ExtractTextWebpackPlugin({
                filename: '[name].css'
            }),
            new CleanWebpackPlugin('dist'),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                inject: true,
                hash: true,
            })
        ]
    })
}