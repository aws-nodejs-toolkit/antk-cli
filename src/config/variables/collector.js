'use strict';

const variableRegex = new RegExp('\\${.+}');

function isString(value) {
    return typeof value === 'string';
}

/**
 * Recursively searches an object's properties for text wrapped in '${...}' syntax
 *
 * @param parent The object to search through
 * @return {Array} Array of variables found
 */
function collect(parent) {
    let variables = [];

    Object.entries(parent).forEach(([key, value]) => {
        if (isString(value)) {
            if (value.match(variableRegex)) {
                variables.push(value);
            }
        } else {
            variables = [...variables, ...collect(value)];
        }
    });

    return variables;
}

module.exports.collect = collect;
