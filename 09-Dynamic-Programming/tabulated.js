const fib = (num) => {
  if (num < 3) return 1;
  const table = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[num];
};
