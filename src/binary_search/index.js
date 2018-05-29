function binarySearch(input, target) {
  const inputLength = input.length
  
  // Base case:
  if (inputLength === 0) {
    return null
  }
  if (inputLength === 1) {
    return input[0] === target ? 0 : null
  }
  
  const averageIndex = Math.round(inputLength / 2)
  const averageElement = input[averageIndex]
  
  if (averageElement === target) {
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
