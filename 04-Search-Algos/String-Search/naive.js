const searchString = (longString, subString) => {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      // Compare each of subString with adjacent item in longString ==> If They don't match, break out of this inner loop
      if (subString[j] !== longString[i + j]) break;

      //   Check if subString is parsed till the end indicating match
      if (j === subString.length - 1) count++;
    }
  }
  return count;
};
