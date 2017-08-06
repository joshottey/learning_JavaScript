var accept = ["a", "b", "c", "d",
              "e", "f", "g", "h",
              "i", "j", "k", "l",
              "m", "n", "o", "p",
              "q", "r", "s", "t",
              "u", "v", "w", "x", 
              "y", "z", "0", "1",
              "2", "3", "4", "5",
              "6", "7", "8", "9"];

function palindrome(str) {
  
  str = str.toLowerCase();
  var cleanedStr = "";
  
  for (var i = 0; i <= str.length-1; i++) {
    for (var j = 0; j <= accept.length-1; j++) {
      if (str.charAt(i) === accept[j]) {
        cleanedStr += accept[j];
      }
    }
  }
  
  return cleanedStr === reverseString(cleanedStr);
}

function reverseString(str) {
  var i = str.length-1;
  var newStr = "";
  while(i>=0) {
    newStr = newStr + str.charAt(i);
    i--;
  }
  return newStr;
}
