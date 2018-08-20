function binarySearch(
  input: string[],
  target: string,
  low: number = 0,
  hight: number = input.length
): number | null {
  if (input.length === 0) {
    return null;
  } else if (input.length === 1) {
    return input[0] === target ? 0 : null;
  }

  const averageIndex = Math.round((low + hight) / 2);
  const averageValue = input[averageIndex];

  if (averageValue === target) {
    return averageIndex;
  }

  const newLow = (target > averageValue) ? averageIndex : 0
  const newHight = (target > averageValue) ? hight : averageIndex

  return binarySearch(input, target, newLow, newHight)
}

export default binarySearch
