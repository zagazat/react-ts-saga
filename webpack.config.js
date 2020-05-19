const webpack = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = env => {
	return {
		entry: {
			main: './src/js/index.tsx'
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			// alias: {
			// 	'@common': 'src/js/common',
			// 	'@core': 'src/js/cire'
			// },
			// plugins: [
			// 	new TsConfigPathsPlugin()
			// ]
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.js?[hash]'
		},
		devServer: {
			contentBase: './dist',
			port: 3000,
			disableHostCheck: true,
		},
		module: {
			rules: [
				{
					test: /\.(js|ts|tsx|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.tsx?$/,
					loader: 'awesome-typescript-loader'
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
					use: 'url-loader'
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/js/index.html'
			})
		],
	}
};