function reverseString(str) {
  var i = str.length-1;
  var newStr = "";
  while(i>=0) {
    newStr = newStr + str.charAt(i);
    i--;
  }
  return newStr;
}
