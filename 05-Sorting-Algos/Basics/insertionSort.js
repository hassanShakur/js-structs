// BigO = O(n^2) ==> 2 for loops for each n
// ? Best = O(n) ==> Array is nearly or already sorted as we'll be breaking out os loop 2 every time
// ! Worst = O(n^2) ==> Comparison in 2 nested loops for each item

const insertionSort = (arr) => {
  // Start at the second element
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    // j starts at the last element in the sorted part of the array and goes down to the start of the array or until the currentVal is greater than the element j is at
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // Just copy the value to the value in the prev index as we have the currentVal stored
      arr[j + 1] = arr[j];
    }

    // When the loop breaks, j holds the index of the value smaller than the surrentVal so place currentVal next to this index
    arr[j + 1] = currentVal;
  }
  return arr;
};

insertionSort([1, 10, 4, 66, 32, 7]);
