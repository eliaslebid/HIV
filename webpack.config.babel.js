const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const glob = require('glob');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const stylus = require('./webpack/stylus');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

// Style Related Packages
import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
import rucksackCSS from 'rucksack-css';
import rupture from 'rupture';
import typographic from 'typographic';

const PATHS = {
	source: path.resolve(__dirname, 'dev'),
	build: path.resolve(__dirname, 'dist')
};

const views = glob.sync(path.join(PATHS.source, '/views/pages/', '**/*.@(html|pug)')).map(filename => {
	const name = path.relative(path.join(PATHS.source, '/views/pages/'), filename).replace(/\.(html|pug)$/, '');
	return {
		chunks: name === 'index' ? ['listpages'] : ['main'],
		filename,
		name
	};
});

const common = merge([
	{
		entry: {
			'main': PATHS.source + '/entry.js',
			'listpages': PATHS.source + '/js/utils/listpages.js'
		},
		output: {
			path: PATHS.build,
			publicPath: '/',
			filename: 'js/[name].js'
		},
		plugins: [
			...views.map(entry => new HtmlWebpackPlugin({
				filename: `${entry.name}.html`,
				chunks: entry.chunks,
				template: entry.filename,
				inject: true,
				data: require('./dev/util/util.json')
			})),
			new webpack.LoaderOptionsPlugin({
				options: {
					stylus: {
						use: [
							typographic(),
							rupture(),
							require('s-grid')(),
							poststylus([autoprefixer, rucksackCSS, require('postcss-flexibility')])
						],
						import: ['~rupture/rupture/index.styl', '~s-grid/s-grid-settings.styl', '~s-grid/s-grid-functions.styl']
					}
				}
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			new webpack.ProgressPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			// new BrowserSyncPlugin({
			// 	host: 'localhost',
			// 	port: 3000,
			// 	server: {
			// 		baseDir: ['dist']
			// 	},
			// 	files: [
			// 		'dist/css/*.css',
			// 		'dist/*.html'
            //
			// 	]
			// })
		]
	},
	pug(),
	images(),
	fonts()
]);

module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			fonts()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			stylus(),
			css(),
			fonts()
		]);
	}
};
