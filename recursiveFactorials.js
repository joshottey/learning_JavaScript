function myFact(num) {
  if(num<0) {
    return "No negatives!";
  } else if(num<=1) {
      return 1;
  } else {
      return num*myFact(num-1);
  }
}
