function r(arr, i, trgt) { return arr[i] === trgt  ? arr[i] : r(arr, i + 1, trgt) }

const l = (arr, trgt) => {
  for (let el of arr) { if (el === trgt) return el }
};

exports.r = r;
exports.l = l;
