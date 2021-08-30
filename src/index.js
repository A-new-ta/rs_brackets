module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = ['(', '[', '|', '{', '1', '3', '5', '7', '8'];
  const PAIR_BRACKETS = {
    ')': '(', 
    ']': '[',
    '|': '|', 
    '}': '{', 
    '2': '1', 
    '4': '3',
    '6': '5',
    '7': '7', 
    '8': '8',
  }

  let stack = [];

  for (let i = 0; i <= str.length - 1; i++) {
   
    if(OPEN_BRACKETS.includes(str[i])) {
        if ((str[i] == "7" || str[i] == "8" || str[i] == "|") && (stack.length > 0)) {
        if (str[i] == stack[stack.length - 1]) {
          stack.pop();
          continue;
        } 
      }
      stack.push(str[i]); 

    } else {

      if (stack.length == 0)  return false;


  
      let topNumber = stack[stack.length - 1];
     
  
      if (PAIR_BRACKETS[str[i]] == topNumber) {
        stack.pop();
       
      } else {
       
        return false;
      }

    }

  }


  return stack.length == 0;
}




