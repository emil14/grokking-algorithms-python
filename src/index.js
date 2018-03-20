const { sorted } = require('./data');
const { r, l } = require('./simple_search');
const { bn } = require('./binary_search');

const algorithms = {
  simpleSearch: {
    r: r(sorted, 0, 24),
    l: l(sorted, 24),
  },
  binarySearch: bn(sorted, 24),
};

for (let key in algorithms) { console.log(key, algorithms[key]) }
