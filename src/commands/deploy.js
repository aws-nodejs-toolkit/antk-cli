'use strict';

const cloudformation = require('@aws-toolkit/cloudformation');

const _config = require( '../config');

async function deploy(path, options) {
    const config = await _config.parse(path, options);

    // read the toolkit.yml file
    // parse project properties, e.g. project name
    // parse variables
    // deploy artifact bucket
    // execute all separate deploy steps

    // if (options.stack) {
    //     const config = parser.getStack(options.stack);
    //
    //     cloudformation.deploy(config['template'], config[''])
    //     // read specific stack config
    //     // deploy stack
    // } else {
    //     // deploy all stacks in order
    // }
}

module.exports.deploy = deploy;
