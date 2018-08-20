import { sortedNames, unsortedNames } from './data'

import simpleSearch from './algorithms/simpleSearch'
import binarySearch from './algorithms/binarySearch'
import quickSort from './algorithms/quickSort'
import selectionSort from './algorithms/selectionSort'

console.log({
  binarySearch: binarySearch(sortedNames, 'Led Zeppelin'),
  simpleSearch: simpleSearch(sortedNames, 'Led Zeppelin'),
  quickSort: quickSort(unsortedNames),
  selectionSort: selectionSort(unsortedNames)
});
