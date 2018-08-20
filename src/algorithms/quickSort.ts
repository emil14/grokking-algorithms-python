function quickSort(input: string[]): string[] {
  if (input.length < 2) {
    return input;
  }

  const pivot: string = input[Math.round(input.length / 2)];
  const less: string[] = [];
  const greater: string[] = [];

  for (let i: number = 0; i < input.length; i++) {
    const current: string = input[i];
    (current !== pivot) && ((current < pivot) ? less : greater).push(current);
  }

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ];
}

export default quickSort;
