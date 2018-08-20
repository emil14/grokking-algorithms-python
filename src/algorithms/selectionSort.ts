function findSmallest(
  input: number[], start: number = 0, lastSmallest: number = 0
): number {
  if (start === input.length - 1) {
    return lastSmallest;
  }

  return findSmallest(
    input,
    start + 1,
    (input[start] < input[lastSmallest]) ? start : lastSmallest
  )
}

// const selectionSort = (input: number[], start: number = 0): number[] => {
// }
