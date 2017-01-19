const path = require('path')
const webpack = require('webpack')
const bourbonPaths = require('node-bourbon').includePaths
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release')

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, './public/assets'),
        publicPath: '/assets/',
        sourcePrefix: '  ',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            debug: isDebug,
            minimize: !isDebug,
            options: {
                sassLoader: {
                    includePaths: [...bourbonPaths],
                },
                sassResources: ['./app/assets/styles/resources.scss'],
                resources: '',
                context: path.resolve(__dirname, '.'),
                output: {
                    path: path.resolve(__dirname, './public/assets'),
                },
            }
        })
    ],
    devtool: isDebug ? 'source-map' : false,
    target: "web",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, './src'),
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[local]' +
                    '!resolve-url' +
                    '!sass-loader?sourceMap'
                    //'!sass-resources-loader',
                }),
            },
            {
                test: /\.md$/,
                loader: path.resolve(__dirname, './utils/webpack-loaders/markdown-loader.js'),
            },
            {
                test: /\.(png|jpg|jpeg|svg|woff|woff2|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 100,
                    name: "[path][name].[ext]",
                    context: 'src/assets/',
                }
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        modules: [
            'node_modules',
        ],
    }
}