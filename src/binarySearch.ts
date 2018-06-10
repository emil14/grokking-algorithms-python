const binarySearch = (
  input: number[], targetValue: number, lowIndex: number = 0, hightIndex: number = input.length
): number | null => {
  const inputLength = input.length

  if (inputLength === 0) return null
  else if (inputLength === 1) return input[0] === targetValue ? 0 : null

  const middleItemIndex = Math.round((lowIndex + hightIndex) / 2)
  const middleItemValue = input[middleItemIndex]

  if (middleItemValue === targetValue) return middleItemIndex
  else {
    const newLowIndex = targetValue > middleItemValue ? middleItemIndex : 0
    const newHightIndex = targetValue > middleItemValue ? hightIndex : middleItemIndex

    return binarySearch(input, targetValue, newLowIndex, newHightIndex)
  }
}

export default binarySearch
