// ! Please don't run this with huge numbers
// ? Please bro :) 

const fib = (num) => {
  if (num < 3) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(40));