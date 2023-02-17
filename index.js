/*=========
Frequency Counter => Function accepting 2 arrays and returrns true if elements in first have corresponding squares in second in any order but same frequency
==========*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (const el of arr1) {
    freqCounter1[el] = freqCounter1[el]++ || 1;
  }

  for (const el of arr2) {
    freqCounter2[el] = freqCounter2[el]++ || 1;
  }

  console.log(freqCounter1);
  console.log(freqCounter2);

  for (const val of freqCounter1) {
    if (!(val ** 2 in freqCounter2)) return false;

    if (freqCounter2[val ** 2] !== freqCounter1[val]) return false;
  }
  return true;
}
