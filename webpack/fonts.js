module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(ttf|eot|woff|woff2)$/,
					loader: 'file-loader',
					exclude: [
						/node_modules/
					],
					options: {
						name: 'fonts/[name]/[name].[ext]',
						prefix: 'font'
					}
				}
			]
		}
	};
};

