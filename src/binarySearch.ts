const binarySearch = (
  input: number[], targetValue: number, low: number = 0, hight: number = input.length
): number | null => {
  const inputLength = input.length
  if (inputLength === 0) return null
  else if (inputLength === 1) return input[0] === targetValue ? 0 : null

  const middleItemIndex = Math.round((low + hight) / 2)
  const middleItemValue = input[middleItemIndex]

  if (middleItemValue === targetValue) return middleItemIndex
  else {
    const newLow = targetValue > middleItemValue ? middleItemIndex : 0
    const newHight = targetValue > middleItemValue ? hight : middleItemIndex
    return binarySearch(input, targetValue, newLow, newHight)
  }
}

export default binarySearch
