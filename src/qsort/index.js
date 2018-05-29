function qsort(input, pivot) {
  // Base case
  const inputLength = input.length
  if (inputLength < 2) {
    return input
  }

  // Recursive case
  const supportingElement = input[supportingElementIndex]
  
  const less = []
  const equals = []
  const greater = []
  
  // Partitioning
  for (let i = 0; i < inputLength - 1; i++) {
    const currentElement = input[i]
    if (currentElement < supportingElement) {
      less.push(currentElement)
    }
    if (currentElement === supportingElement) {
      equals.push(currentElement)
    }
    if (currentElement > supportingElement) {
      greater.push(currentElement)
    }
  }
  
  return [
    ...qsort(less)
    ...qsort(equals)
    ...qsort(greater)
  ]
}

export.qsort = qsort
