'use strict';

var elements = require('./elements.js');
var arrayMiner = require('array-miner');

arrayMiner.add(elements);

var lookup = function (query) {
  var results = arrayMiner.find(query);

  if (results.length <= 1) {
    results = results[0];
  }

  return results;
};

lookup.version = '0.0.3';

module.exports = lookup;