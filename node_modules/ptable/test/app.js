'use strict';

var will = require('willy').will;
var app = require('../app.js');

describe('sanity', function () {
  it('should load', function () {
    will(app).exist();
  });

  it('should show a version', function () {
    will(app.version).exist();
  });
});

describe('looking up elements', function () {
  it('should find Chlorine by "Cl"', function () {
    var element = app('Cl');
    will(element.name).be('Chlorine');
  });

  it('should find Chlorine by "cL"', function () {
    var element = app('cL');
    will(element.name).be('Chlorine');
  });

  it('should find Manganese by "Manganese"', function () {
    var element = app('Manganese');
    will(element.name).be('Manganese');
  });

  it('should return undefined for non-existant symbols"', function () {
    var element = app('xyz');
    will(element).be(undefined);
  });

  it('should find Fermium by weight (257)', function () {
    var element = app(257);
    will(element.name).be('Fermium');
  });

  it('should find by atomic number', function () {
    var element = app(106);
    will(element).beLike(
      { number: 106, weight: 266, name: 'Seaborgium', symbol: 'Sg' }
    );
  });

  it('should return an array of matches if there were multiple', function () {
    var element = app(98);
    will(element).beLike([
      { number: 43, weight: 98, name: 'Technetium', symbol: 'Tc' },
      { number: 98, weight: 251, name: 'Californium', symbol: 'Cf' },
    ]);
  });
});

describe('caching', function () {
  it('should cache lookups', function () {
    var start, first, second;

    start = process.hrtime()[1];
    app(3);
    first = process.hrtime()[1] - start;

    start = process.hrtime()[1];
    app(3);
    second = process.hrtime()[1] - start;

    will(second).beLessThan(first);
  });
});