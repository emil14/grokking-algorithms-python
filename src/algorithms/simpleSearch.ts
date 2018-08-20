function simpleSearch(
  input: string[], target: string, start: number = 0
): number | null {
  const inputLength = input.length

  if (inputLength === 0) {
    return null;
  } else if (inputLength === 1) {
    return input[0] === target ? 0 : null;
  }

  return (input[start] === target) ? start : simpleSearch(input, target, start + 1);
}

export default simpleSearch;
