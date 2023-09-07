function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

//Big-O = O(log(n))

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 5));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 1));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 3));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 6));
