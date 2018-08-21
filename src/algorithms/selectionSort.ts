function swap(input: string[], i: number, j: number): string[] {
  const output: string[] = [...input];

  output[i] = input[j];
  output[j] = input[i];

  return output;
}

function selectionSort(input: string[], start: number = 0): string[] {
  let result: string[] = [...input];

  for (let i: number = 0; i < input.length; i++) {
    let smallest = i;

    for (let j: number = i + 1; j < input.length; j++) {
      if (input[j] < input[smallest]) {
        smallest = j;
      }
    }


    if (input[i] < input[smallest]) {
      result = swap(input, i, smallest);
    }
  }

  return result;
}

export default selectionSort;
