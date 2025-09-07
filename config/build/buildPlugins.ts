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
        filename: "css/[name].[contenthash:8].css", 
        chunkFilename: "css/[name].[contenthash:8].css"
        }),
    ];


    if (isDev) {
        plugins.push(        
    new webpack.HotModuleReplacementPlugin(),
    )
    }

    if (!isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                openAnalyzer: true,
                analyzerPort: 'auto',
                generateStatsFile: true,
                statsFilename: 'bundle-stats.json',
            })
        );
    }



    return plugins;
}