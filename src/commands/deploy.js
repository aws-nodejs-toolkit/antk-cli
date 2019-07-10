'use strict';

const path = require('path');
const cloudformation = require('@aws-toolkit/cloudformation');

const { ConfigParser } = require('../config/parser');
const fs = require('../filesystem');

async function deploy(options) {
    const configPath = getConfigPath();
    const yaml = await readYaml(configPath);
    const parser = parseYaml(yaml);

    // read the toolkit.yml file
    // parse project properties, e.g. project name
    // parse variables
    // deploy artifact bucket
    // execute all separate deploy steps

    if (options.stack) {
        const config = parser.getStack(options.stack);

        cloudformation.deploy(config['template'], config[''])
        // read specific stack config
        // deploy stack
    } else {
        // deploy all stacks in order
    }
}

function getConfigPath() {
    for (const configName of ['aws-toolkit.yml', 'aws-toolkit.yaml']) {
        const configPath = path.resolve(process.cwd(), configName);

        if (fs.exists(configPath)) {
            return configPath;
        }
    }
}

function parseYaml(yaml) {
    return new ConfigParser(yaml);
}

async function readYaml(path) {
    return await fs.readFile(path);
}

module.exports.deploy = deploy;
