function Planet(size, a, e, Mo, nd, capomega, omega, i) {
  this.size = size;
  this.a = a;
  this.Mo = Mo; //j200 Mean ANOMALY
  this.Ta = 0; //True Anomaly
  this.e = e;
  this.capomega = capomega; //capital lomega
  this.omega = omega;
  this.i = i; //inlination
  this.nd = nd; //nowday
  this.hx = 0;
  this.hy = 0;
  this.x = cx;
  this.y = cy;
  this.cn = 0;
  this.ma = 0;
}
Planet.prototype.ephemeris = function() {
  /*************************
   *STEP 1 - MEAN ANOMALY
   *************************/
  //cn is n - avg angle per semimajor M = function(Mo, n, nowday, startday
  this.cn = n(this.a);
  //ma is Mean ANOMALY
  //startDate is 0, because J200
  this.ma = M(this.Mo, this.cn, this.nd, 0);
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
    this.hx = hecx(this.or, this.capomega, this.omega, this.i, this.Ta);
    //this.hy = hey(this.or, this.capomega, this.omega, this.i, this.Ta);
    this.hy = wow(this.or, this.capomega, this.omega, this.i, this.Ta);
}
Planet.prototype.show = function() {
  noFill();
  ellipse(cx, cy, this.a, b(this.a, this.e));
  fill(200);
  this.nd+=10;
  ellipse(cx - this.hx,cy - this.hy, 10, 10);
}

Planet.prototype.gui = function() {
  text("Planet X " + round(this.hx), 10, 560);
  text("Planet Y " + round(this.hy), 10, 580);
  text("Mean Anomaly " + round(this.ma), 100, 560);
  text("True Anomaly " + round(this.Ta), 100, 580);
  text("Orbit Radius " + round(this.or), 400, 560);
  text("Orbit Radius " + round(this.or), 400, 560);
  text("Distance " + round(this.or*149.6), 400, 580);

}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.show = function() {
    fill(random(255));
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
