module.exports = ( api ) => {
	api.cache( true );

	return {
		presets: [ "@wordpress/babel-preset-default" ],
		plugins: [ "@babel/plugin-transform-optional-chaining", "@babel/plugin-transform-runtime" ],
		sourceType: "unambiguous",
	};
};

