// BigO = O(n^2) ==> 2 for loops for each n
// ? Best = O(n^2) ==> @ for loops
// ! Worst = O(n^2) ==> Comparison in 2 nested loops for each item

const selectionSort = (arr) => {
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  for (let i = 0; i < arr.length; i++) {
    // Set the first item in the loop as the smallest
    let smallest = i;

    // j starts at 1 position after i so as not to compare i with itself
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j, smallest);
      // Check for smaller value and update the smallest index
      if (arr[j] < arr[smallest]) smallest = j;
    }
    // Make a swap only if there is a smaller value than the one we began with so as not to swap it by itself
    if (i !== smallest) swap(arr, i, smallest);
  }

  return arr;
};

selectionSort([1, 10, 4, 66, 32, 7]);
