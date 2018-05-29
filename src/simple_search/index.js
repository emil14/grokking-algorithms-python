function r(arr, i, trgt) { return arr[i] === trgt  ? i : r(arr, i + 1, trgt) }

funciton simpleSearch(input, target) {
  const inputLength = input.length
  
  // Base case
  if (inputLength === 0) {
    return null
  }
  if (inputLength === 1) {
    return input[0] === target ? 0 : null
  }
  
  // Loop case
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target) {
      return i
    }
  }
  
  return null
}

exports.simpleSearch = simpleSearch
