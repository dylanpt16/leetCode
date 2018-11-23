/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  let number = 0;

  hash = {'I':1,'V':5, 'X':10,'L':50,'C':100,'D':500, 'M':1000}
  for(let idx = s.length - 1; idx >= 0; idx--) {
    if(hash[s[idx]] - hash[s[idx - 1]] > 0) {
      num = hash[s[idx]] - hash[s[idx - 1]];
      idx--;
    }else {
      num = hash[s[idx]];
    }
    number += num;
  }

  return number;
};
