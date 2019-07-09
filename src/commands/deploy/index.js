'use strict';



async function deploy(env, region, stack) {
    // read the toolkit.yml file
    // parse project properties, e.g. project name
    // parse variables
    // deploy artifact bucket
    // execute all separate deploy steps

    if (stack) {
        // read specific stack config
        // deploy stack
    } else {
        // read whole config
        // deploy all stacks in order
    }
}

module.exports.deploy = deploy;
