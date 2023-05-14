// BigO = O(nk) ==> n - array length, k - avg word length / num of digits
// ? Best = O(nk) ==> n - array length, k - avg word length / num of digits
// ! Worst = O(nk) ==> n - array length, k - avg word length / num of digits

// Get the digit at a position in the number starting from 0 at 1s place value
const getDigit = (num, pos) => {
  const revNum = String(num).split('').reverse().join('');
  return +revNum[pos] || 0;
};

// Return number of digits in a number
const digitCount = (num) => {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Return the length of the digit with the most number of digits
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (arr) => {
  const maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    // Create an empty nested array each sub array to hold digits ending with their corresponding index
    const digitsBucketList = Array.from({ length: 10 }, () => []);
    for (let h = 0; h < arr.length; h++) {
      // Get the digit of concern from the number
      const digit = getDigit(arr[h], i);
      //   Push the number to the index of the bucket corresponding to the digit of concern
      digitsBucketList[digit].push(arr[h]);
    }
    // console.log(digitsBucketList);
    // Break down the nested 2d array to 1d array with nums following each other from 0 - 9
    arr = [].concat(...digitsBucketList);
  }
  return arr;
};

radixSort([1, 203, 445, 34, 99, 578, 7, 38, 22]);
