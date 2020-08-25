const countWords = (inputWords) => {
  return inputWords.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
      accumulator[currentValue] = 0;
    }
    accumulator[currentValue] += 1;
    return accumulator;
  }, {});
};

function countWordsSolution(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 
    return countMap
  }, {})
}



module.exports = countWords;
