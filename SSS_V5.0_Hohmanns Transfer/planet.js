function Planet(col, size, a, e, n, Mo, nd, capomega, omega, i) {
  this.size = size;
  this.a = a;
  this.Mo = Mo; //j200 Mean ANOMALY
  this.Ta = 0; //True Anomaly
  this.n = n;
  this.e = e;
  this.capomega = capomega; //capital lomega
  this.omega = omega;
  this.i = i; //inlination
  this.nd = nd; //nowday
  this.hx = 0;
  this.hy = 0;
  this.x = cx;
  this.y = cy;
  this.col = col; // colour variable
  this.cn = 0;
  this.ma = 0;
  this.tx = 0;
  this.ty = 0; //testing vars
 }
Planet.prototype.ephemeris = function() {
  /*************************
   *STEP 1 - MEAN ANOMALY
   *************************/
  //cn is n - avg angle per semimajor M = function(Mo, n, nowday, startday
  //this.cn = n(this.a); - wrong code
  text("n " + this.n, 10, 100);
  //ma is Mean ANOMALY
  //startDate is 0, because J200
  this.ma = M(this.Mo, this.n, this.nd, 0);
  /*************************
   *STEP 2 - TRUE ANOMALY
   *************************/
  this.Ta = TrueAnom(this.e, this.ma);
  /*************************
   *STEP 3 - ORIBITAL RADIUS or (semimajor, eccentricity, angle) {
   *************************/
  this.or = or(this.a, this.e, this.Ta);
   /*************************
    *STEP 4 - HELIOCENTRIC COORDINATES
     hex(or, lomega, omega, i, Nu) {
     hey(or, lomega, omega, i, Nu) {
    *************************/
  this.rx = 149.6*this.or*cos(this.Ta);
  this.ry = 149.6*this.or*sin(this.Ta);

  this.hx = 149.6*hecx(this.or, this.capomega, this.omega, this.i, this.Ta);
    //this.hy = hey(this.or, this.capomega, this.omega, this.i, this.Ta);
  this.hy = -149.6*hey(this.or, this.capomega, this.omega, this.i, this.Ta);
}
Planet.prototype.show = function() {
  noFill();
  stroke(255)
  ellipse(cx, cy,2*this.a*149.6, 2*149.6*b(this.a, this.e));
  fill(this.col);
  noStroke();
  ellipse(cx - this.hx,cy - this.hy, 10);
  this.nd+=0.1;

}

Planet.prototype.gui = function() {
  
  fill(255)
  text("Planet X " + this.hx/149.6, 10, 400);
  text("Planet Y " + this.hy/149.6, 10, 450);
  text("Mean Anomaly " + this.ma, 100, 560);
  text("True Anomaly " + this.Ta, 100, 580);
  text("Orbit Radius " + this.or, 400, 560);
  text("Distance " + round(this.or*149.6), 400, 580);

}
function Hohmann() {
  this.pa = 0; //Probe's Semimajor
  this.pe = 0; //Probe's Eccentricity
  this.pea = 0;
  this.px = 0;
  this.py = 0;
}
Hohmann.prototype.transfer = function() {
  //new pa = (earth r (perihelion) + mars r (aphelion))
  this.pa = (earth.or + mars.or)/2;
  this.pe = 1 - (earth.or/this.pa)

  this.px = probex(this.pa, this.pe, this.pea);
  this.py = probey(this.pa, this.pe, this.pea);
}

Hohmann.prototype.show = function() {
  //orbit

  //probe point

  this.pea+=(PI/100);


}

function Star() {
  this.x = random(-width, width - 100);
  this.y = random(-height, height);
  this.show = function() {
    fill(random(100,255));
    noStroke();
    ellipse(this.x, this.y, 2, 2);
  }
}















/**
function Planet() {
  this.radius = 6300;
  this.

  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }
}



function Planet_data() {
    this.size = size;
    this.a = a;
    this.b = b;   //SemiMinor Axis 10^6 km
    this.e = e;   //Eccentricity
    this.n = n;   //Daily Motion
    this.Mo = Mo;   //Mean Anomaly
    this.lan = lan;  //longitude of ascending node
    this.lop = lop;   //longitude of perihelion
    this.omega = omega;
    this.lomega = lomega;
    this.perihelion = perihelion;
    this.aperihelion = aperihelion;
    this.orbitalperiod = orbitalperiod;
    this.mass = mass;   //Mass - 10^24
    this.GM = GM;   //10^6 km^2/s^2
    this.surfacegravity = surfacegravity;
    this.i = i;   //Orbital Inclination
    this.colour = colour;
};

//size, a, b, e, n, Mo, lan, lop, omega, lomega, perihelion, aperihelion, orbitalperiod, mass, GM, surfacegravity, i, colour

class Planet {
  constructor {

  }
  compute {

  }
  show {

  }
}
*/
