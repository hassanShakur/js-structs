// BigO = O(n log n) ==> log n for the decomposition and n for the comparisons in merging.
// ? Best = O(n log n) ==> log n for the decomposition and n for the comparisons in merging.
// ! Worst = O(n log n) ==> log n for the decomposition and n for the comparisons in merging.

const merge = (arr1, arr2) => {
  let arrIndex1 = 0;
  let arrIndex2 = 0;
  let mergedArray = [];

  while (arrIndex1 < arr1.length && arrIndex2 < arr2.length) {
    if (arr1[arrIndex1] < arr2[arrIndex2]) {
      mergedArray.push(arr1[arrIndex1]);
      arrIndex1++;
    } else {
      mergedArray.push(arr2[arrIndex2]);
      arrIndex2++;
    }
  }

  // Reaching here, one array is depleted and the rest of its elements should be added to the mergedArray
  while (arrIndex1 < arr1.length) {
    mergedArray.push(arr1[arrIndex1]);
    arrIndex1++;
  }

  while (arrIndex2 < arr2.length) {
    mergedArray.push(arr2[arrIndex2]);
    arrIndex2++;
  }
  return mergedArray;
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  console.log(left, right);
  console.log('****************');
  return merge(left, right);
};

console.log(mergeSort([4, 3, 9, 8]));
