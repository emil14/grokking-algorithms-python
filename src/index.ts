import sortedNumList from './data'

import simpleSearch from './simpleSearch'
import binarySearch from './binarySearch'

console.log({
  binarySearch: binarySearch(sortedNumList, 42),
  simpleSearch: simpleSearch(sortedNumList, 42),
});
