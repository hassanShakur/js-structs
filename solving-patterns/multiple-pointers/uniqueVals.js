// Counts unique vals in a sorted array. Pointer 1 (counter) starts at position 0 and Pointer 2 (i) at position 1. If the 2 pointers are different at every i iteration, increase counter by 1 and at its position place the newest new value to compare the rest of the items with

const countUniqueVals = (arr) => {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[counter] !== arr[i]) {
      counter++;
      arr[counter] = arr[i];
    }
  }

  return ++counter;
};
