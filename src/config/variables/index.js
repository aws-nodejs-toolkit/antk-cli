'use strict';

const { collect } = require('./collector');
const { parse } = require('./parser');
const { resolve } = require('./resolver');

module.exports.collect = collect;
module.exports.parse = parse;
module.exports.resolve = resolve;
