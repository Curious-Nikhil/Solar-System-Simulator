var SCALE = 10;
var AU = 1495978.707;
var cx;
var cy;
var hey;
var earth_data;
function setup() {
  createCanvas(600, 600);
  cx = width/2;
  cy = height/2;
  //size, a, e, Mo, nd, capomega, omega, i
  earth = new Planet(20, 149.60, 0.0167, 357.529, 1460.5, 174.873, 288.064, 0);
}

function draw() {
  background(10);
  fill("yellow");
  ellipse(cx, cy, 25);
  earth.ephemeris();
  earth.show();
  earth.gui();
  // text(earth.hx, cx, 550);
  // text(earth.hy, cx, 500);
  // mars.move();
  // mars.show();
}
