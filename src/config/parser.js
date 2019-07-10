'use strict';

const { parse } = require('yaml');

class ConfigParser {
    constructor(yaml) {
        const config = parse(yaml);

        this.aws = config.aws;
        this.stacks = config.stacks;
        this.variables = config.variables;

        console.log(this.getStacks());
    }

    getRegion() {
        return this.aws.region;
    }

    getStack(name) {
        return this.getStacks()[name];
    }

    getStacks() {
        return this.stacks;
    }

    getVariable(name) {
        return this.getVariables()[name];
    }

    getVariables() {
        return this.variables;
    }
}

module.exports.ConfigParser = ConfigParser;
