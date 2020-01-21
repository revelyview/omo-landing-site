/* eslint-disable @typescript-eslint/no-var-requires */
const withCss = require('@zeit/next-css'); // import 'file.css'

module.exports = withCss({
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        };
        return config;
    },
});
