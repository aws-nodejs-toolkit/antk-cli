'use strict';

const resolveCloudformation = require('./cloudformation');
const resolveParameterstore = require('./parameterstore');

async function resolve(variable, context) {
    // ${resolver:var} comes in
    // split it, process it and pass on to correct resolves
    // context { cliOptions, ... }

}

module.exports = resolve;
