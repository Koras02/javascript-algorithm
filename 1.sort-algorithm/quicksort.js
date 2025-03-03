function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array4 = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = quickSort(array4);
console.log("퀵 정렬:", sortedArray); // [3, 9, 10, 27, 38, 43, 82]
