[![Build Status](https://travis-ci.org/reergymerej/ptable.svg)](https://travis-ci.org/reergymerej/ptable)

Look up elements by atomic number, weight, name, or symbol.

###Usage

```js
var pTable = require('ptable');

pTable(15);
// { number: 15, weight: 30.9738, name: 'Phosphorus', symbol: 'P' }

pTable('Vanadium');
// { number: 23, weight: 50.9415, name: 'Vanadium', symbol: 'V' }

pTable('Cl');
// { number: 17, weight: 35.453, name: 'Chlorine', symbol: 'Cl' }

// multiple results are returned as an array
pTable(98);
// [
//   { number: 43, weight: 98, name: 'Technetium', symbol: 'Tc' },
//   { number: 98, weight: 251, name: 'Californium', symbol: 'Cf' }
// ]

// matching is case-insensitive
pTable('kr');
// { number: 36, weight: 83.8, name: 'Krypton', symbol: 'Kr' }
```

###Installation

```sh
npm install ptable
```

###Run Tests

```sh
npm test
```

---
data courtesy of [Israel Science and Technology Homepage](http://www.science.co.il/PTelements.asp)
