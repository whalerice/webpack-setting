const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: './js/bundle.[contenthash].js',
		filename: './js/bundle.min.js',
		clean: true,
	},
	module: {
		rules: [
			// test: /\.(jpe?g|png|gif|svg)$/i,
			// name: 'images/[name].[ext]?[hash]',
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			// {
			// 	test: /\.(png|jpe?g|gif|svg)$/i,
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: './images/[name].[ext]?[hash]',
			// 	},
			// },
			// {
			// 	test: /\.(png|svg|jpg|gif)$/,
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 10000,
			// 		name: 'images/[name].[hash:7].[ext]',
			// 	},
			// },
		],
	},
	plugins: [
		new HtmlPlugin({
			minify: {
				collapseWhitespace: true,
			},
			hash: true,
			template: './index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/images', to: 'images' }],
		}),
		new MiniCssExtractPlugin({
			// filename: './css/[name].[contenthash].css',
			// chunkFilename: './css/[id].[contenthash].css',
			filename: './css/[name].min.css',
			chunkFilename: './css/[id].min.css',
		}),
	],
	devServer: {
		host: 'localhost',
	},
};
