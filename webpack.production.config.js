// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	devtool: 'eval-source-map', // 使得调试更容易
	entry: __dirname + '/app/main.js', // 唯一的入口文件
	output: {
		path: __dirname + '/build', // 打包的文件存放位置
		filename: '[name]-[hash].js' // 打包后输出文件文件名 
	},
 	//Loaders 转换css  Es7转换Es5 React的JSX文件转换js
 	module: {
 		rules: [
 			{
 				test:  /(\.jsx|\.js)$/, // 一个用以匹配loaders所处理文件的拓展名的正则表达式
 				use: {
 					loader: "babel-loader",
 				},
 				exclude: /node_modules/ //手动添加必须处理的文件(文件夹)或屏蔽不需要处理的文件 
 			},
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                    	loader: "postcss-loader"
                    }
                ]
            },
            {
            	test: /\.json$/,
            	use: "json-loader"
            }
 		]
 	},
 	// plugins 拓展Webpack功能
 	plugins:[
 		new webpack.BannerPlugin("Copyright helloint org."),
 		new HtmlWebpackPlugin({
 			template: __dirname + "/app/index.tmpl.html"
 		}),
 		new webpack.optimize.OccurenceOrderPlugin(), //为组件分配ID
 		new webpack.optimize.UglifyJsPlugin(), //压缩JS代码
 		new ExtractTextPlugin("[name]-[hash].css") //分离CSS和JS文件
 	]

}
		