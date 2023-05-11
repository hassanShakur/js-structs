// BigO = O(n^2) ==> 2 for loops for each n
// ? Best = O(n) ==> Using the swapped var & array is nearly or already sorted
// ! Worst = O(n^2) ==> Comparison in 2 nested loops for each item

const bubbleSort = (arr) => {
  let swapped;
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  for (let i = arr.length; i > 0; i--) {
    swapped = false;
    // (i - 1) as we wont be checking the last element from the previous loop. Every loop sends its greatest digit to the end.
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    // If swapping has not happened in one round, array is already sorted
    if (!swapped) break;
    console.log('Pass complete');
  }

  return arr;
};

bubbleSort([1, 10, 4, 66, 32, 7]);
