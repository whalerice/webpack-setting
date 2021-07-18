const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: './js/bundle.[contenthash].js',
		filename: 'js/bundle.min.js',
		clean: true,
	},
	module: {
		rules: [
			// test: /\.(jpe?g|png|gif|svg)$/i,
			// name: 'images/[name].[ext]?[hash]',
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			minify: {
				collapseWhitespace: true,
			},
			hash: true,
			template: './src/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/images', to: 'images' }],
		}),
		new MiniCssExtractPlugin({
			// filename: './css/[name].[contenthash].css',
			// chunkFilename: './css/[id].[contenthash].css',
			filename: 'css/[name].min.css',
			chunkFilename: 'css/[id].min.css',
		}),
	],
	devServer: {
		host: 'localhost',
	},
};
