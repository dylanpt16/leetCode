/**
 * @param {string} s
 * @return {boolean}
 */
//  "([)]"
//  "([{)]}"
//

var isValidStack = function(stack, closeChar){
  const lastChar = stack.pop();
  let validOpenChar = "";
  switch(closeChar) {
    case ')':
      validOpenChar = '(';
      break;
    case '}':
      validOpenChar = '{';
      break;
    case ']':
      validOpenChar = '[';
      break;
  }
  return validOpenChar == lastChar;
}

var isValid = function(s) {
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    switch(s[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(s[i]);
        break;
      default:
        if(!isValidStack(stack, s[i])) return false;
    }
  }

  return !stack.length;
};
