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
  print(M(357.529, 0.985608, 1460.5, 0));
  var tempg = EccAnom(0.04849, 141.324, 5)
  print(tempg);
  var tempan = Nu(0.04849, tempg, 5);

  var tempi = TrueAnom(0.01671, 357.529)
  var tempgen = or(1.00000,0.01671,tempi)

  print("Final X")
  print(hx(5.40406, 100.464, 273.867, 1.303, tempi));


}

function draw() {
  background(10);
  fill("yellow");
  ellipse(cx, cy, 25);

}
