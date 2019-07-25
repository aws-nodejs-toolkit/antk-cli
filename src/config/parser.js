'use strict';

const reader = require('./reader');
const variables = require('./variables');
const _yaml = require('../yaml');

async function parse(path, options) {
    const content = await reader.read(path);
    const yaml = _yaml.parse(content);
    const vars = variables.collect(yaml);

    const variableMap = {};

    for (const variable of vars) {
        const [type, ...key] = variables.parse(variable);
        const result = await variables.resolve(type, key, options).catch((err) => {
            console.log(err);
        });
        // if matches ${} continue
        console.log(result);
        variableMap[variable] = result;
    }

    // for each var -> resolve
    // get map of var:resolved value back
    // apply map to yaml, replace method?

    // yaml = resolved variables and all blabla,


    return yaml;
}

module.exports.parse = parse;
