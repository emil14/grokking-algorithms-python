const quickSort = (input: number[]): number[] => {
  const inputLength = input.length

  if (inputLength < 2) {
    return input
  }

  const pivot = input[Math.round(input.length / 2)]
  const less = []
  const greater = []

  for (let i = 0; i < inputLength - 1; i++) {
    const currentElement = input[i]

    if (currentElement < pivot) less.push(currentElement)
    else greater.push(currentElement)
  }

  return [
    ...quickSort(less),
    ...quickSort(greater)
  ]
}

export default quickSort
