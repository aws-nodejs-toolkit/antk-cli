#!/usr/bin/env node

'use strict';

const program = require('commander');
const config = require('../package');

program.command('deploy', 'execute an aws-toolkit deployment for a specific stack');
program.version(config.version, '-v, --version');

program.parse(process.argv);
