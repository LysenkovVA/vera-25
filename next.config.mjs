import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const basePath = "http://localhost:3000";

/** @type {import('next').NextConfig} */
const nextConfig = {
    cleanDistDir: true,
    /**
     * Custom Webpack Config
     * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
     */
    webpack(config, options) {
        const { dev, isServer, nextConfig } = options;

        // Do not run type checking twice:
        if (dev && isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        // config.plugins.push({
        //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        //     use: [
        //         {
        //             loader: 'babel-loader',
        //         },
        //         {
        //             loader: '@svgr/webpack',
        //             options: {
        //                 babel: false,
        //                 icon: true,
        //             },
        //         },
        //     ],
        // })

        return config;
    },
};

export default nextConfig;
