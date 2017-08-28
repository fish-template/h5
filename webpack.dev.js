const webpack = require('webpack');
const path = require('path');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/',
        host: '0.0.0.0',
        hot: true,
        open: true,
        port: 3333
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

    ]
}