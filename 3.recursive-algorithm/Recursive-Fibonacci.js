function fibonacci(n) {
  // 기본 사례: F(0) = 0, F(1) = 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // 재귀 호출
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 예제 사용
console.log(fibonacci(6)); // 출력: 8(0, 1, 1, 2, 3, 5 , 8)
