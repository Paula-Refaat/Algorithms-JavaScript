function insertionSort(arr) {
  let key, j;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// Big-O = O(n^2)

const arr = [80, 90, 30, 50, 60, 70, 40];
insertionSort(arr);
console.log(arr);
