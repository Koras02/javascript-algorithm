function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 찾을 경우 index 반환
    } else if (arr[mid] < target) {
      left = mid + 1; // 오른쪽 절반 탐색
    } else {
      right = mid - 1; // 왼쪽 절반 탐색
    }
  }
  return -1; // 찾지 못할 경우 -1 반환
}

// example
const sortedNumbers = [1, 2, 3, 5, 8];
const target2 = 5;
const index2 = binarySearch(sortedNumbers, target2);
console.log(index2);
