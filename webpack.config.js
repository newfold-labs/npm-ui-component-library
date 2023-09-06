const defaults = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaults,
    resolve: {
        ...defaults.resolve,
        alias: {
            ...defaults.resolve.alias,
            '@App': path.resolve(__dirname, '/src/app/'),
        },
    },
};
