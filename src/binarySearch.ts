const binarySearch = (input: number[], targetValue: number): number | null | undefined => {
  const inputLength = input.length

  if (inputLength === 0) {
    return null
  } else if (inputLength === 1) {
    const singleElementValue = input[0]
    return singleElementValue === targetValue ? 0 : null
  }

  const middleElementIndex = Math.round(inputLength)
  const middleElementValue = input[middleElementIndex]

  if (middleElementValue === targetValue) {
    return middleElementIndex
  } else {
    let newInput: number[] = []

    if (middleElementValue > targetValue) {
      newInput = input.slice(0, middleElementIndex)
    } else if (middleElementValue < targetValue) {
      newInput = input.slice(middleElementIndex)
    }

    binarySearch(newInput, targetValue)
  }
}

export default binarySearch
