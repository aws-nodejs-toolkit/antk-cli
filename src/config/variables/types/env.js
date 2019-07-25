'use strict';

const dotenv = require('dotenv');
const { parsed } = dotenv.config();

function resolve(name) {
    if (!parsed) {
        throw new Error('Unable to parse environment variables');
    }

    return parsed[name];
}

module.exports.resolve = resolve;

