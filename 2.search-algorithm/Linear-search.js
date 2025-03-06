// 선형 탐색 알고리즘
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // 찾은 경우 인덱스를 반환
    }
  }

  return -1; // 찾지 못할 경우 -1 반환
}

// example
const numbers = [5, 2, 4, 1, 6];
const target = 6;
const index = linearSearch(numbers, target);
console.log(index); // 출력: 4
