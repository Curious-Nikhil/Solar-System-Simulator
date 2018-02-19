var SCALE = 10;
var AU = 1495978.707;
var cx;
var cy;
var uix;
var uiy;
var input;

function setup() {
  canvas = createCanvas(600, 600);
  /*****************************************
  *DOM
  ******************************************/
  // h1 = createElement('h1', 'Control Centre');
  // h1.position(800, 2)
  //
  // slider = createSlider(0, 100, 10);
  // slider.position(800, 200)
  // input = createInput('Enter Date');
  // //input.postion(800, 150)

  /*****************************************
  *OTHERS
  ******************************************/
  cx = width/2;
  cy = height/2;
  //size, a, e, Mo, nd, capomega, omega, i
  earth = new Planet(20, 149.60, 0.0167, 357.529, 1460.5, 174.873, 288.064, 0);
  mars = new Planet(10, marsdata.a, marsdata.e, marsdata.lomega)
}

function draw() {
  background(0);
  fill("yellow");
  ellipse(cx, cy, 25);
  earth.ephemeris();
  earth.show();
  earth.gui();
  text(earth.nd, 10, 20);
  // mars.gui();
  // mars.ephemeris();
  // mars.show();

}

function inputdate(datein) {
  //function DayDiff(startday, days) {
  var result = DateDiff(datein);
}
