/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xStr = x.toString();
  let xStrLength = xStr.length;
  let idxLeft = 0;
  let idxRight = 0;

  if(xStrLength%2 == 0) {
    idxLeft = xStrLength/2 - 1;
    idxRight = xStrLength/2;
  }else {
    idxLeft = Math.floor(xStrLength/2);
    idxRight = idxLeft;
  }

  for(;idxRight < xStrLength; idxRight++, idxLeft--) {
    if(xStr[idxLeft] != xStr[idxRight]) {
      return false;
    }
  }

  return true;
};
