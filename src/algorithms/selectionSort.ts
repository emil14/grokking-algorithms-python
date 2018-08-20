function findSmallest(
  input: string[],
  start: number = 0,
  lastSmallest: number = 0
): number {
  if (start === input.length - 1) {
    return lastSmallest;
  }

  return findSmallest(
    input,
    start + 1,
    input[start] < input[lastSmallest] ? start : lastSmallest
  );
}

function selectionSort(input: string[], start: number = 0): string[] {
  const result: string[] = [...input];

  for (let i: number = 0; i < result.length; i++) {
    const current = result[i];
    const smallestIndex = findSmallest(result);
    const smallestValue = result[smallestIndex];

    if (current !== smallestValue) {
      result[smallestIndex] = current;
      result[i] = smallestValue;
    }
  }

  return result;
}

export default selectionSort;
