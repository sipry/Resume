const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
// const { table } = require('console');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
});
