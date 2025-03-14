const fibonacciWithMemo = (function () {
  const memo = {};

  function fib(n) {
    if (n in memo) {
      return memo[n];
    }
    if (n == 0) return 0;
    if (n == 1) return 1;

    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  return fib;
})();

console.log(fibonacciWithMemo(6)); // result: 8
