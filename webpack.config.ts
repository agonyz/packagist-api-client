import * as path from 'path';
import { Configuration } from 'webpack';
const nodeExternals = require('webpack-node-externals');

const config: Configuration = {
    entry: './src/api/PackagistApi.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'PackagistApiClient'
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }
};

export default config;
