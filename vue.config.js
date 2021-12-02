const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 6,
            }),
        ],
    },
    pwa: {
        name: 'MutableSecurity',
        themeColor: '#3f37c9',
        msTileColor: '#3f37c9',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#3f37c9',
    },
    css: {
        sourceMap: process.env.NODE_ENV !== 'production',
    },
};
