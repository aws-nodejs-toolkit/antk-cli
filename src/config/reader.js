'use strict';

const _path = require('path');

const filesystem = require('../filesystem');

async function read(path) {
    path = _path.resolve(process.cwd(), path);
    return filesystem.readFile(path);
}

module.exports.read = read;
