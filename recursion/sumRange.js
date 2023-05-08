const sumRange = (num) => {
  return num === 1 ? 1 : sumRange(num - 1);
};

sumRange(4);
