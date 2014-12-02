/* Word count takes a sentence and returns the frequency of each word used */

var wordCount = function (sentence) {
  return sentence.toUpperCase().split(' ').reduce(function(countMap, word) {
    countMap[word] = countMap[word] ? countMap[word] + 1 : 1;
    return countMap;
  },{});
};

/* Test */

wordCount([
  'its like this and like that and like this and uh',
  'its like that and like this and like that and uh',
  'its like this and like that and like this and uh',
  'Dre creep to the mic like a phantom'
].join(' '));


// "ITS": 3,
// "LIKE": 10,
// "THIS": 5,
// "AND": 9,
// "THAT": 4,
// "UH": 3,
// "DRE": 1,
// "CREEP": 1,
// "TO": 1,
// "THE": 1,
// "MIC": 1,
// "A": 1,
// "PHANTOM": 1