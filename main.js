//plan is to grab the CD and replace the IJ with it
//assume x is default parent

var x = document.getElementById("parent1").value; //"abcdef" 
var y = document.getElementById("parent2").value; //"ghijkl" 

var charLoc1 = 2;
var charLoc2 = 4;

function myFunction(a,b){
  var begPartOfString = b.substring(0,charLoc1);
  var endPartOfString = b.substring(charLoc2,b.length);
  var swapSubstance = a.substring(charLoc1,charLoc2);

  return begPartOfString + swapSubstance + endPartOfString;
}

document.getElementById("result").innerHTML = myFunction(x,y);

console.log(myFunction(x,y));