#!/usr/bin/env node

'use strict';

const program = require('commander');
const config = require('../package');

program.version(config.version, '-v, --version');
program.command('deploy', 'execute an aws-toolkit deployment');
program.parse(process.argv);
