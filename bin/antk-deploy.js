#!/usr/bin/env node

'use strict';

const program = require('commander');
const minimist = require('minimist');

const { deploy } = require('../src/commands/deploy');

const argv = minimist(process.argv);
delete argv['_'];

program.name('antk deploy');
program.usage('<path> [options]');

program.action(async (path) => {
    const options = {};

    Object.entries(argv).forEach(([key, value]) => {
        options[key] = value;
    });

    await deploy(path, options);
});

program.parse(process.argv);
