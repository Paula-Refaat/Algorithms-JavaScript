function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
//Big-O = O(log(n))

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));