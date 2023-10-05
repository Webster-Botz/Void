'use strict';

var will = require('willy').will;
var app = require('../app.js');

var generateData = function (count) {
  var data = [];

  while (count--) {
    data.push({
      id: data.length,
      time: Date.now(),
      rand: Math.random(),
      foo: count
    });
  }

  return data;
};

describe('sanity', function () {
  it('should load', function () {
    will(app).exist();
  });

  it('should show a version', function () {
    will(app.version).exist();
  });
});

describe('loading data', function () {
  afterEach(function () {
    app.clear();
  });

  it('should accept an array', function () {
    app.add([{}, {}, {}]);
    will(app.count()).be(3);
  });

  it('should accept individul objects', function () {
    app.add({}, {}, {});
    will(app.count()).be(3);
  });

  it('should keep a count of the items in the data set', function () {
    app.add({}, {});
    app.add({}, {});
    will(app.count()).be(4);
  });
});

describe('clearing data', function () {
  it('should clear data with `clear`', function () {
    app.add({});
    will(app.count()).be(1);
    app.clear();
    will(app.count()).be(0);
  });
});

describe('find', function () {
  var DATA = [
    { id: 1, color: 'red' },
    { id: 2, color: 'red' },
  ];

  beforeEach(function () {
    app.add(DATA);
  });

  afterEach(function () {
    app.clear();
  });

  it('should find any items that have a matching field value', function () {
    var result = app.find(2);
    will(result[0]).beLike(DATA[1]);
  });

  xit('altering find result should not alter internal data', function () {
    var result = app.find(2)[0];
    result.color = 'white';
    result = app.find(2)[0];
    will(result.color).not.be('white');
  });
});

describe('getting raw data', function () {
  var items = [{a: 1}, {b: 2}, {a: 99}];
  
  beforeEach(function () {
    app.add(items);
  });

  afterEach(function () {
    app.clear();
  });

  it('should expose the underlying data when requested', function () {
    will(app.data()).beLike(items);
  });

  it('should not affect the data when the returned stuff is messed with', function () {
    var data = app.data();
    var length = data.length;
    data.splice(0, length);
    will(app.data().length).be(length);
  });
});

describe('caching', function () {
  before(function () {
    app.add(generateData(10000));
  });

  after(function () {
    app.clear();
  });

  it('should cache lookups', function () {
    var start, first, second;

    start = process.hrtime();
    app.find(3);
    first = process.hrtime(start);

    start = process.hrtime();
    app.find(3);
    second = process.hrtime(start);

    second = (second[0] * 1e9 + second[1]);
    first = (first[0] * 1e9 + first[1]);

    will(second).beLessThan(first);
  });
});
