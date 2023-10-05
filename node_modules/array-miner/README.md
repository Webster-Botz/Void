[![Build Status](https://travis-ci.org/reergymerej/array-miner.svg)](https://travis-ci.org/reergymerej/array-miner)

Search through an array of objects quickly and efficiently.

```js
var arrayMiner = require('array-miner');

// add items as an array...
arrayMiner.add([
  { foo: 123, bar: 1 },
  { apply: 1, pie: 1 },
  { 123: 'foo', 'some-key': 4 }
]);

// ...or one at a time
arrayMiner.add({ id: 'unique' }, { foo: 4 }, { monkey: 'foo' });

arrayMiner.count();  // 6

// results are returned in an array
arrayMiner.find(4);
// [ { '123': 'foo', 'some-key': 4 }, { foo: 4 } ]

arrayMiner.find('unique');
// [{ id: 'unique' }]

arrayMiner.find('ghosts');
// []

// clear everything out
arrayMiner.clear();
arrayMiner.count();  // 6
```