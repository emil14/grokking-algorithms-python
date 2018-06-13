import { sortedNumList, unsortedNumList } from './data'

import simpleSearch from './algorithms/simpleSearch'
import binarySearch from './algorithms/binarySearch'
import quickSort from './algorithms/quickSort'

console.log({
  binarySearch: binarySearch(sortedNumList, 4),
  simpleSearch: simpleSearch(sortedNumList, 4),
  quickSort: quickSort(unsortedNumList),
});
