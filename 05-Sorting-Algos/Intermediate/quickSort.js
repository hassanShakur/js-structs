// BigO = O(n log n) ==> log n for the decomposition and n for the comparisons in merging.
// ? Best = O(n log n) ==> log n for the decomposition and n for the comparisons in each decomposition.
// ! Worst = O(n^2) ==> for a sorted array. There will be n decompositions as each element will be a pivot at some point. Then comparisons are still n. This happens if pivot is always the min or max element in the array.

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  //   Move the pivot to the correct index
  swap(arr, start, swapIndex);
  //   console.log(arr);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // While array length > 1
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // Left side
    quickSort(arr, left, pivotIndex - 1);
    // Right side
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

quickSort([2, 4, 5, 10, 1, 9]);
