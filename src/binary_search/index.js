function binarySearch(input, target) {
  // Base case:
  const inputLength = input.length
  
  if (inputLength === 0) {
    return null
  }
  if (inputLength === 1) {
    return 0
  }
  
  const averageIndex = Math.round(inputLength / 2)
  const averageElement = input[averageIndex]
  
  if (averageElement === trgt) {
    return averageIndex;
  }
  
  // Recursive case:
  if (averageElement > target) {
    const newInput = input.slice(0, averageElement)
    binarySearch(newInput, target)
  }
  if (averageElement < target) {
    const newInput = input.slice(averageElement)
    binarySearch(newInput, target)
  }
}

exports.binarySearch = binarySearch
