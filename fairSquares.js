//*** A whiteboard problem I was given at an interview ***

//a function to generate a bunch of random integers in an array for testing
function getInts(num, max) {
  var yourInts = [];
  for(var k=0;k<num;k++) {
    yourInts.push(Math.floor(Math.random()*max)+1);
  }
  return yourInts;
}

//function to check if an integer is a palindrome
function reverse(num) {
  var revStr = "";
  for(var j=num.length-1;j>=0;j--) {
    revStr += num.charAt(j);
  }
  return num === revStr;
}

//main function that returns an array of fair and square numbers from a given array
//fair meaning a palindrome and square meaning a perfect square...
function fairSquare(array) {
  var fairSquares = [];
  for(var i=0;i<array.length;i++) {
    var asStr = array[i].toString();
    if(Math.sqrt(array[i]) % 1 === 0) {
      if(reverse(asStr)) {
        fairSquares.push(array[i]);
      }
    }
  }
  return fairSquares;
}
