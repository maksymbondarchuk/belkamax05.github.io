const shouldUseSourceMap = false;//process.env.GENERATE_SOURCEMAP !== 'false';
const autoprefixer = require('autoprefixer');
const config = require('../../../');
const publicPath = config.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    test: /\.scss$/,
    loader: [
		require.resolve('style-loader'),
		{
		  loader: require.resolve('css-loader'),
		  options: {
			importLoaders: 1,
		  },
		},
		{
		  loader: require.resolve('postcss-loader'),
		  options: {
			// Necessary for external CSS imports to work
			// https://github.com/facebookincubator/create-react-app/issues/2677
			ident: 'postcss',
			plugins: () => [
			  require('postcss-flexbugs-fixes'),
			  autoprefixer({
				browsers: [
				  '>1%',
				  'last 4 versions',
				  'Firefox ESR',
				  'not ie < 9', // React doesn't support IE8 anyway
				],
				flexbox: 'no-2009',
			  }),
			],
		  },
		},
		require.resolve('sass-loader'),
	  //   {
	  //     loader: 'sass-resources-loader',
	  //     options: {
	  //       resources: [ './src/styles/global/**/*.scss' ],
	  //     },
	  //   }
	  ],
    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
  };