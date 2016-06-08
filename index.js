'use strict';

const propertyAliases = require('unicode-property-aliases');
const canonicalNames = require('./data/canonical-names.js');

const matchProperty = function(property) {
	if (canonicalNames.has(property)) {
		return property;
	}
	if (propertyAliases.has(property)) {
		return propertyAliases.get(property);
	}
	throw new Error(`Unknown property: ${ property }`);
};

module.exports = matchProperty;
