const path = require('path');

module.exports = {
	entry: ['./src/js/main.js'],
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src/js')],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
		],
	},
	// devtool: 'source-map',
	mode: 'development',
	// mode: 'production',
};
