// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function(sentence) {
   return new Set(sentence).size===26
};
