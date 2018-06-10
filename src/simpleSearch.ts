const simpleSearch = (
  input: number[], targetValue: number, start: number = 0
): number | null => {
  const inputLength = input.length

  if (inputLength === 0) return null
  else if (inputLength === 1) return input[0] === targetValue ? 0 : null

  return input[start] === targetValue ? start : simpleSearch(input, targetValue, start + 1)
}

export default simpleSearch
