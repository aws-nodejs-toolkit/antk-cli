#!/usr/bin/env node

'use strict';

const program = require('commander');

const { deploy } = require('../src/commands/deploy');

program.name('antk deploy');
program.usage('[options]');

program.action(async (cmd) => {
    await deploy();
});

program.parse(process.argv);
