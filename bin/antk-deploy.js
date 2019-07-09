#!/usr/bin/env node

'use strict';

const program = require('commander');

const { deploy } = require('../src/commands/deploy');

program.name('antk deploy');
program.usage('[options]');

program.option('-e, --env, --environment <name>');
program.option('-r, --region <name>');
program.option('-s, --stack <name>');

program.action(async (command) => {
    await deploy(command.env, command.region, command.stack);
});

program.parse(process.argv);
