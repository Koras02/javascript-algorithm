function factorial(n) {
  // 기본 사례: 0! = 1, 1! = 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // 재귀 호출
  return n * factorial(n - 1);
}

// 예제 사용
console.log(factorial(5)); // 출력: 120
