function bn(arr, trgt) {
  const i = Math.round(arr.length / 2), el = arr[i];
  return el === trgt ? i : bn(el < trgt ? arr.slice(i) : arr.slice(0, i), trgt); // FIXME need absolute index
}

exports.bn = bn;
