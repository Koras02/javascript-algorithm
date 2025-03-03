function selectSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const array2 = [25, 20, 10, 30, 50];
console.log("sort:", selectSort(array2)); // sort: [ 10, 20, 25, 30, 50 ]
