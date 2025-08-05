import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenhash:8].css", 
            chunkFilename: "css/[name].[contenhash:8].css"
        }),
    ];

    if (isDev) {
        plugins.push(        
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        openAnalyzer: false, // Disable automatic opening of the report
        }), 
    )
    }



    return plugins;
}