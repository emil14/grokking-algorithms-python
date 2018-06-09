const binarySearch = (input: number[], targetValue: number): number | null => {
  const inputLength = input.length

  if (inputLength === 0) return null
  else if (inputLength === 1) return input[0] === targetValue ? 0 : null

  const middleElementIndex = Math.round(inputLength)
  const middleElementValue = input[middleElementIndex]

  if (middleElementValue === targetValue) return middleElementIndex
  else {
    const newInput: number[] = middleElementValue > targetValue
      ? input.slice(0, middleElementIndex)
      : input.slice(middleElementIndex)
    return binarySearch(newInput, targetValue)
  }
}

export default binarySearch
