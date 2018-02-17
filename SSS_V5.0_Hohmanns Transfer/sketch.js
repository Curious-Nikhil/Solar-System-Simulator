var SCALE = 10;
var AU = 1495978.707;
var cx;
var cy;
function setup() {
  createCanvas(600, 600);
  slideme = createSlider(0, 100, 50);
  cx = width/2;
  cy = height/2;
  //size, a, e, Mo, nd, capomega, omega, i
  earth = new Planet(20, 149.60, 0.0167, 357.529, 1460.5, 174.873, 288.064, 0);
  mars = new Planet(10, marsdata.a, marsdata.e, marsdata.lomega)
}

function draw() {
  background(slideme.value());
  fill("yellow");
  ellipse(cx, cy, 25);
  earth.ephemeris();
  earth.show();
  earth.gui();
  // mars.gui();
  // mars.ephemeris();
  // mars.show();

}
