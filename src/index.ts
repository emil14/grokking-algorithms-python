import { sortedNumList, unsortedNumList } from './data'

import simpleSearch from './simpleSearch'
import binarySearch from './binarySearch'
import quickSort from './quickSort'

console.log({
  binarySearch: binarySearch(sortedNumList, 4),
  simpleSearch: simpleSearch(sortedNumList, 4),
  quickSort: quickSort(unsortedNumList),
});
