'use strict';

const reader = require('./reader');
const variables = require('./variables');
const _yaml = require('../yaml');

async function parse(path, options) {
    const file = await reader.read(path);
    let yaml = _yaml.parse(file);
    const vars = variables.collect(yaml);

    const variableMap = {};

    for (const variable of vars) {
        const [type, ...key] = variables.parse(variable);
        const result = await variables.resolve(type, key, options).catch((err) => {
            // console.log(err);
        });
        variableMap[variable] = result;
    }

    yaml = variables.replace(yaml, variableMap);

    return yaml;
}

module.exports.parse = parse;
