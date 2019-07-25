'use strict';

const cli = require('./types/cli');
const env = require('./types/env');

/**
 *
 * @param type Type of the variable which indicates its source
 * @param key Array of key elements to resolve the variable
 * @param options
 * @return {Promise<null>}
 */
async function resolve(type, key, options) {
    let variable;

    switch (type) {
        case 'cli':
            variable = cli.resolve(key, options);
            break;
        case 'env':
            variable = env.resolve(key);
            break;
        default:
             variable = null;
             break;
    }

    if (!variable) {
        throw new Error(`Could not resolve variable '${type}:${key.join(':')}'`);
    }

    return variable;
}

module.exports.resolve = resolve;
