var SCALE = 10;
var AU = 1495978.707;
var cx;
var cy;
var hey;

function setup() {
  createCanvas(600, 600);
  cx = width/2;
  cy = height/2;
  var daysnow = DayDiff(0, 6500);
  print(daysnow);
  var str2 = "2/14/2018"
  print(dateDiff( str2 ));
  print(n(1));
}

function draw() {
  background(10);
  fill("yellow");
  ellipse(cx, cy, 25);

}
