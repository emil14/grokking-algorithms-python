const findSmallest = (
  input: number[], start: number = 0, lastSmallestIndex: number = 0
): number => {
  if (start === input.length - 1) return lastSmallestIndex

  const newSmallestIndex = input[start] < input[lastSmallestIndex] ? start : lastSmallestIndex
  return findSmallest(input, start + 1, newSmallestIndex)
}

// const selectionSort = (input: number[], start: number = 0): number[] => {
// }
