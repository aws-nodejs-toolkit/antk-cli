'use strict';

const cloudformation = require('@aws-toolkit/cloudformation');

async function resolve(stackName, outputKey, region) {
    const output = await cloudformation.describeOutput(stackName, outputKey, region);

    return output['OutputValue'];
}

module.exports.resolve = resolve;
