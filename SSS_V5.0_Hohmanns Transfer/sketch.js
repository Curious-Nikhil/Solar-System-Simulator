var SCALE = 10;
var AU = 149.5978707; //million kms
var cx;
var cy;
var uix;
var uiy;
var input;
var stars = [];

function setup() {
    canvas = createCanvas(1200, 600);
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
    cx = width/2 - 200;
    cy = height/2;
    angleMode(RADIANS);
    //size, a, e, Mo, nd, capomega, omega, i
    let ix = random(cx*2);
    let iy = random(cy*2);
    for (var i = 0; i < 800; i++) {
      stars[i] = new Star();
    }
    var day = 0;
    var blue = color(0, 18, 255);
    var red = color(255, 107, 0);
    var jup = color(251, 146, 87)

    earth = new Planet(blue, 20 /*size*/, 1/*a*/, 0.0167/*e*/, 0.985608/*n*/, 357.529/*Mo*/, day/*nowday*/, 174.873/*cO*/, 288.064/*O*/, 0/*i*/);
    mars = new Planet(red, 10, 1.524, 0.0935, 0.524039, 19.373, day, 49.558, 286.502, 1.850)
    jupiter = new Planet(jup, 30, 5.20260, 0.04849, 0.083056, 20.020, day, 100.464, 273.867, 1.303)
  }

function draw() {
    //background(0);
    fill("yellow");
    ellipse(cx, cy, 25);
    earth.ephemeris();
    earth.show();
    earth.gui();
    mars.ephemeris();
    mars.show();
    jupiter.ephemeris();
    jupiter.show();
    fill(255)
    text(2000 + earth.nd/365, 10, 20);

    //hecx(or, lomega, omega, i, Nu)
    text(hecx(0.98707936, 174.873, 288.064, 0, 357.44473839499), 100, 100)
    text(or(1, 0.0167, 357.4447390516976) + "orbit radiuss", 200, 200)


    for ( var i = 0; i < stars.length; i++) {
      stars[i].show();
    }

  }
