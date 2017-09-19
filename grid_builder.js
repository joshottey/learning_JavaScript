function buildGrid(size) {
  var count = 0,
      grid = "";
    
  for (var i = 0;i <= (Math.pow(size, 2) + (size - 1));i++) {
    if (count == size) {
      grid += "\n";
      count = 0;
    } else if (i % 2 == 0) {
      grid += " ";
      count++;
    } else {
        grid += "~"; // uses ~ as character to alternate with " " for grid
        count++;
    }
  }
  
  return grid;
}
