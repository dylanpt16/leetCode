/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  resultStr = '';

  for(let i = 0; i < (strs[0] || "").length; i++) {
    let singleChar = strs[0][i];

    for(let j = 1; j < strs.length; j++) {
      if(singleChar != strs[j][i]) {
        return resultStr;
      }
    }

    resultStr += singleChar;
  }

  return resultStr;
};
