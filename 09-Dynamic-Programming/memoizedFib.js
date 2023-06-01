const fib = (num, memo = {}) => {
  if (memo[num]) return memo[num];
  if (num < 3) return 1;
  const result = fib(num - 1, memo) + fib(num - 2, memo);
  memo[num] = result;
  return result;
};

console.log(fib(100));
