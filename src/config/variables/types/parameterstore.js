'use strict';

const { cli } = require('@aws-toolkit/aws-cli');

async function resolve(name, decrypt = false) {
    const args = [
        'get-parameter',
        '--name', name
    ];

    if (decrypt) {
        args.push('--with-decryption');
    }

    const parameter = await cli('ssm', args);
    return parameter['Parameter']['Value'];
}

module.exports.resolve = resolve;
