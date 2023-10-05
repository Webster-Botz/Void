'use strict';

var cache = {};
var dataSource = [];

var isMatch = function (element, query) {
  var found = false;
  var compare = function (value) {
    if (typeof value === 'string') {
      value = value.toLowerCase();
    }

    return value === query;
  };

  if (typeof query === 'string') {
    query = query.toLowerCase();
  }

  Object.keys(element).every(function (key) {
    found = compare(element[key]);
    return !found;
  });
  return found;
};

var dereference = function (arr) {
  var clean = [];
  var i, max;

  for (i = 0, max = arr.length; i < max; i++) {
    clean.push(JSON.parse(JSON.stringify(arr[i])));
  }

  return clean;
};

var lookup = function (query) {
  var result = cache[query];
  
  if (!result) {
    result = dataSource.filter(function (element) {
      return isMatch(element, query);
    });
  }

  return (cache[query] = dereference(result));
};

var add = function (data) {
  if (arguments.length > 1) {
    data = Array.prototype.slice.apply(arguments);
  }
  dataSource = dataSource.concat(data);
};

var count = function () {
  return dataSource.length;
};

var clear = function () {
  dataSource = [];
};

var data = function () {
  return dereference(dataSource);
};

module.exports = {
  version: '0.0.1',
  add: add,
  find: lookup,
  count: count,
  clear: clear,
  data: data
};
