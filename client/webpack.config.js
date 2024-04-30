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
				swDest: "service-worker.js",
			}),
			new WebpackPwaManifest({
				name: "Progressive Web Applications (PWA): Text Editor",
				short_name: "PWATextEditor",
				start_url: "./",
				description: "A PWA text editor",
				background_color: "#ffffff",
				orientation: "portrait",
				display: "standalone",
				icons: [
					{
						src: path.resolve("./src/images/logo.png"),
						sizes: [96, 128, 192, 256, 384, 512],
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
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: "asset/resource",
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
