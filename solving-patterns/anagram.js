/*=========
Anagram => String 1 can be rearranged to form string 2
==========*/

const isAnagram = (str1, str2) => {
  // Return if strings aren't equal in length
  if (str1.length !== str2.length) return false;

  // Create frequency object for str1
  let freqObj = {};
  for (const el of str1) {
    freqObj[el] ? ++freqObj[el] : (freqObj[el] = 1);
  }

  // Loop through and if any is in str2, remove it or subtract 1
  for (const el of str2) {
    // If letter is not found return

    if (!(el in freqObj)) return false;
    freqObj[el] -= 1;
  }

  // Return object
  return true;
};

console.log(isAnagram('cate', 'ecat'));
