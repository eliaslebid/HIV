module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								mimetype: 'image/svg+xml'
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif|ico)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					]
				}
			]
		}
	};
};
