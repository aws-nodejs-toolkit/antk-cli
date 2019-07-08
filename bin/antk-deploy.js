#!/usr/bin/env node

'use strict';

const program = require('commander');

program.name('antk deploy');
program.usage('[options]');

program.action((cmd) => {
    console.log(cmd);
});

program.parse(process.argv);
