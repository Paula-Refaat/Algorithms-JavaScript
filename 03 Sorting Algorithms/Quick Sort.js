function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let rigth = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}

const arr = [3, 7, 2, 6, 1, 0, 5, 8];

console.log(quickSort(arr));
