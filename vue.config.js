const globalSassFile = ['~@/assets/sass/index.scss'];

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {

    productionSourceMap: false,

    css: {
        loaderOptions: {
            sass: {
                prependData: globalSassFile.map(src => `@import "${src}";`).join('\n'),
            },
        },
    },

    chainWebpack: (config) => {
        ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
            config.module.rule('sass').oneOf(match).use('sass-loader')
                .tap(opt => Object.assign(opt, { prependData: globalSassFile.map(src => `@import "${src}"`).join('\n') }));
        });
    },

    /* configureWebpack: {
           plugins: [new BundleAnalyzerPlugin()],
    }, */
};
