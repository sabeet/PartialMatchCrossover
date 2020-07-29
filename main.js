//plan is to grab the CD and replace the IJ with it
//assume x is default parent

var x = "ABCDEF";
var y = "GHIJKL";

var charLoc1 = 2;
var charLoc2 = 4;

function myFunction(a,b){
  var begPartOfString = b.substring(0,charLoc1);
  var endPartOfString = b.substring(charLoc2,b.length);
  var swapSubstance = a.substring(charLoc1,charLoc2);

  return begPartOfString + swapSubstance + endPartOfString;
};

console.log(myFunction(x,y));