// BigO = O(n)
// ? Best = O(1) ==> First Element
// ! Worst = O(n) ==> Last Element

const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};
