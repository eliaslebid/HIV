const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.styl$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{ loader: 'css-loader', options: { url: false} },
							{ loader: 'postcss-loader', options: {
								plugins: function () {
									return [
										autoprefixer({browsers: ['last 2 versions']})
									];
								}
							}
						},'stylus-loader']
					})
				},
				{
					test: /\.css$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					})
				}
			]
		},
		plugins: [
			new ExtractTextPlugin({
				filename: './css/[name].css',
				allChunks: true
			})
		]
	};
};
