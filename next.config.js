/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const withCss = require('@zeit/next-css'); // import 'file.css'

dotenv.config();

module.exports = withCss({
    publicRuntimeConfig: {
        // Will be available on both server and client
        // Pass through env variables
        // apiBaseUrl: 'http://localhost:5000',
        // env: 'production',
        apiBaseUrl: process.env.API_BASEURL,
        emailTo: process.env.EMAIL_TO,
    },

    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        };
        return config;
    },
});
