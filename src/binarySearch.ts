const binarySearch = (input: number[], targetValue: number): number | null => {
  const inputLength = input.length

  if (inputLength === 0) return null
  else if (inputLength === 1) return input[0] === targetValue ? 0 : null

  const middleItemIndex = Math.round(inputLength / 2)
  const middleItemValue = input[middleItemIndex]

  if (middleItemValue === targetValue) return middleItemIndex
  else {
    const newInput: number[] = middleItemValue > targetValue
      ? input.slice(0, middleItemIndex)
      : input.slice(middleItemIndex)
    return binarySearch(newInput, targetValue)
  }
}

export default binarySearch
