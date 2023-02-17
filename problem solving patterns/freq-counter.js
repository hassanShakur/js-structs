/*=========
Frequency Counter => Function accepting 2 arrays and returrns true if elements in first have corresponding squares in second in any order but same frequency
==========*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (const el of arr1) {
    // If el is there, increment value else add it with a val of 1
    freqCounter1[el] = ++freqCounter1[el] || 1;
  }

  for (const el of arr2) {
    // If el is there, increment value else add it with a val of 1
    freqCounter2[el] = ++freqCounter2[el] || 1;
  }

  console.log(freqCounter1);
  console.log(freqCounter2);

  for (const val in freqCounter1) {
    // If square of val in 1 is not in 2
    if (!(val ** 2 in freqCounter2)) return false;

    // If a squared val in 2 is not in 1
    if (freqCounter2[val ** 2] !== freqCounter1[val]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));
