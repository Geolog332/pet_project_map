import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: isDev ? '[name].js' : '[name].[contenthash].js',
            chunkFilename: isDev ? '[name].chunk.js' : '[name].[contenthash].chunk.js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        devtool: isDev ? 'eval-cheap-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
    }
}