'use strict';

const variableRegex = new RegExp('\\${.+}');

function isString(value) {
    return typeof value === 'string';
}

/**
 * Replaces variables in a string with their values
 *
 * @param string The string to apply replacements on
 * @param variables Map of variables and their values
 */
function replaceOne(string, variables) {
    Object.entries(variables).forEach(([key, value]) => {
        if (string.includes(key)) {
            string = string.replace(key, value);
        }
    });

    return string;
}

/**
 * Recursively replaces all variables in an object with their values
 *
 * @param parent
 * @param variables Map of variables and their values
 * @return {*}
 */
function replaceAll(parent, variables) {
    Object.entries(parent).forEach(([key, value]) => {
        if (isString(value)) {
            if (value.match(variableRegex)) {
                parent[key] = replaceOne(value, variables);
            }
        } else {
            parent[key] = replaceAll(value, variables);
        }
    });

    return parent;
}

module.exports.replace = replaceAll;
