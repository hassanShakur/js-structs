// Add nums to n

// version 1
const addTo = (n) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
};

// version 2

const betterAddTo = (n) => {
  return (n * (n + 1)) / 2;
};

// const t1 = performance.now();
// addTo(1000000000); // About 1.16 secs
// const t2 = performance.now();
// console.log(`Time consumed: ${(t2 - t1) / 1000} secs`);

const t1 = performance.now();
betterAddTo(1000000000); // About 0.000026 secs
const t2 = performance.now();
console.log(`Time consumed: ${(t2 - t1) / 1000} secs`);
