var webpack = require("../../../../");
module.exports = {
	entry: {
		main: "./index",
		other: "./other"
	},
	externals: {
		fs: "commonjs fs",
		external: "1+2",
		external2: "3+4",
		external3: "5+6"
	},
	target: "web",
	output: {
		filename: "[name].js"
	},
	node: {
		__dirname: false,
		__filename: false
	},
	optimization: {
		minimize: false,
		initialCommonsChunk: {
			minSize: 1,
			name: "common"
		}
	}
};
