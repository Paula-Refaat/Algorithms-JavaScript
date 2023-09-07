function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
//Big-O = O(n)

console.log(linearSearch([1, 7, 5, 3], 3));
console.log(linearSearch([1, 7, 5, 3], 7));
console.log(linearSearch([1, 7, 5, 3], 5));
console.log(linearSearch([1, 7, 5, 3], 1));
console.log(linearSearch([1, 7, 5, 3], 10));

