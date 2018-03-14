function r(arr, i, trgt) { return arr[i] === trgt  ? arr[i] : r(arr, i + 1, trgt) }

const l = (arr, trgt) => {
  for (let i of arr) { if (arr[i] === trgt) return arr[i] }
};

exports.r = r;
exports.l = l;
