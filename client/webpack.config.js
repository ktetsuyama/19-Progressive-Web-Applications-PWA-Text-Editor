const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
	return {
		mode: "development",
		entry: {
			main: "./src/js/index.js",
			install: "./src/js/install.js",
		},
		output: {
			filename: "[name].bundle.js",
			path: path.resolve(__dirname, "dist"),
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./index.html",
				title: "Webpack Plugin",
			}),
			new MiniCssExtractPlugin(),
			new InjectManifest({
				swSrc: "./src-sw.js",
				swDest: "./sw.js",
			}),
			new WebpackPwaManifest({
				start_url: "./",
				publicPath: "./",
				name: "Progressive Web Applications (PWA): Text Editor",
				short_name: "PWATextEditor",
				description: "A PWA text editor",
				background_color: "#ffffff",
				orientation: "portrait",
				display: "standalone",
				fingerprints: false,
				icons: [
					{
						src: "./src/images/logo.png",
						sizes: [96, 128, 192, 256, 384, 512],
						destination: path.join("assets", "icons"),
					},
				],
			}),
		],

		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader"],
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				},
			],
		},
	};
};
