function r(arr, i, trgt) { return arr[i] === trgt  ? i : r(arr, i + 1, trgt) }

const l = (arr, trgt) => {
  for (let i of arr.keys()) { if (arr[i] === trgt) return i }
};

exports.r = r;
exports.l = l;
