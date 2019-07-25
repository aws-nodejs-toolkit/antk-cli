'use strict';

function removeVariableSyntax(variable) {
    return variable.slice(2, variable.length - 1);
}

/**
 * Removes ${} and splits the variable with the ':' separator
 *
 * @param variable
 * @return {string[]} Array of a single variable type element and variable key elements
 */
function parse(variable) {
    variable = removeVariableSyntax(variable);
    return variable.split(':');
}

module.exports.parse = parse;
