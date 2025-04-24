function fibRec(steps, n = 2, arrFib = [0, 1]) {
  if (n >= steps) return arrFib;
  else {
    arrFib.push(arrFib[n - 1] + arrFib[n - 2]);
    return fibRec(steps, n + 1, arrFib);
  }
}

const arra = [55, 45, 43, 1, 8];
function mergesortRec(arra) {
  if (arra.length <= 1) return arra;
  let left = mergesortRec(arra.slice(0, Math.ceil(arra.length / 2)));
  let right = mergesortRec(arra.slice(Math.ceil(arra.length / 2)));
  return merge(left, right);
}
function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  result.push(...left);
  result.push(...right);
  return result;
}
console.log(mergesortRec(arra));
