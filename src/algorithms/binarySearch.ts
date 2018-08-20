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

  const newBorders = target > averageValue ? [averageIndex, hight] : [0, averageIndex];

  return binarySearch(input, target, ...newBorders)
}

export default binarySearch
