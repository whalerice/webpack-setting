const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.min.js',
		clean: true,
	},
	devServer: {
		host: 'localhost',
		open: true,
		port: 3000,
		overlay: true, // 빌드시 에러나 경고를 브라우져 화면에 표시한다.
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
			filename: 'css/[name].min.css',
			chunkFilename: 'css/[id].min.css',
		}),
	],
};
