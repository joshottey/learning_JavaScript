function factorialize(num) {
  var i = 1;
  var fact = 1;
  while(i<num) {
    fact = fact * (i+1);
    i++;
  }
  return fact;
}
