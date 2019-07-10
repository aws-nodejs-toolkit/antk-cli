'use strict';

const fs = require('fs');

function exists(path) {
    return fs.existsSync(path);
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

module.exports.exists = exists;
module.exports.readFile = readFile;
