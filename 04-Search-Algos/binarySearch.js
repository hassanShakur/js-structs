// BigO = O(log n) ==> 2 pow n = arr.length
// ? Best = O(1) ==> Mid Element
// ! Worst = O(log n) ==> Last Element

const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end + start) / 2);

  while (num !== arr[mid] && start < end) {
    // Reposition the start & end
    arr[mid] < num ? (start = mid + 1) : (end = mid - 1);

    // Recalc mid value
    mid = Math.floor((end + start) / 2);
  }

  //   Check if the mid is the target i.e if the 2nd condition (start < end) was hit meaning target not found.
  return arr[mid] === num ? mid : -1;
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7);
