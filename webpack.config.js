const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }
        ],
    },
    devtool:"inline-source-map",
    devServer:{
        static:"./dist"
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title:"Home Page"
        }),
    ],
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),
        ],
        runtimeChunk:"single",
        minimize:true,
    },
};