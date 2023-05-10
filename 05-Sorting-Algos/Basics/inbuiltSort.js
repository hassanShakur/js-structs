const sortNums = (a, b) => {
  return a - b; // Ascending
  // return a + b; // Descending
};

const sortStrings = (a, b) => {
  return a.length - b.length; // Increasing length
  // return b.length - a.length; // Decreasing length
};

[5, 6, 3, 0, 1].sort(sortNums);
['a', 'aa', 'aaa', 'aaaa'].sort(sortStrings);
