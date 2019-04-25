const path = require('path');
const webpack = require('webpack');

const webpack_rules = [];

const dist_options = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: webpack_rules
	}
};

const babelLoader = {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env"]
		}
	}
};

webpack_rules.push(babelLoader);
module.exports = [
	dist_options
];