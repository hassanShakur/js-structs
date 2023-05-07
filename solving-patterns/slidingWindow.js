const maxSumSubArray = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  // Array has fewer elements that the number of items to sum in the sub array
  if (arr.length < num) return null;

  // Get sum of first n digits
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // Subtract leftmost & add rightmost digit as the window slides instead of recalculating the sum of all the consecutive digits
    tempSum = tempSum - arr[i - num] + arr[i];

    // Compare to find the highest and save that
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSumSubArray([1, 2, 3, 4, 5, 6], 4));
