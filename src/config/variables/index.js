'use strict';

const { collect } = require('./collector');
const { parse } = require('./parser');
const { replace } = require('./replacer');
const { resolve } = require('./resolver');

module.exports.collect = collect;
module.exports.parse = parse;
module.exports.replace = replace;
module.exports.resolve = resolve;
