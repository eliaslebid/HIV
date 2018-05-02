const path = require('path');

module.exports = function() {
	return {
		module: {
			rules: [
				{
					test :/\.pug$/,
					use: {
						loader: 'pug-loader',
						query: {
							root: path.resolve(__dirname, 'dev/views')
						}
					}
				}
			]
		}
	};
};

