module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
					loader: 'file-loader',
					exclude: [
						/fonts/
					],
					options: {
						publicPath: './',
						name: '[name].[ext]',
						outputPath: './img/'
					}
				}
			]
		}
	};
};
