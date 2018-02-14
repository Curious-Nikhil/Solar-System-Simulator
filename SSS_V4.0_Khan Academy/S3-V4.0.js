//CREATED - 1ST MAY 2017
//https://nssdc.gsfc.nasa.gov/planetary/planetfact.html
/***************************************************
 UPDATES -
 1.DATA SHEET
 2.FORMULAE
 3.ZOOM FUNCTION
 4.MEAN ANOMALY
 5.Heliocentric Elliptical Coordinate System! (oof!)
 6.OPP Integration
****************************************************/
/***************************************************
WHAT TO DO?
1.MAKE A UNIVERSAL PLANET FUNCTION!
2.HOHMANN'S TRANSFER ORBIT TRAJECTORY
3.GRAVITY SIMULATION
4.Zoom out Function
5.GUI - Buttons and Sliders
6.SCALED PLANETS, MOONS AND SUN
7.SCENES
****************************************************/
/****************************************************
JUST CLICKED :-
1. How to find the angle between two planets -
    Nu2 - Nu1 = 44 degrees for Hohmanns Tranfer
2.
****************************************************/
/***************************************************
 SCALE
****************************************************/
var SCALE = 1;
/***************************************************
 PLANETARY DATA
****************************************************/
var b = function(semimajor, eccentricity) {
  var b = semimajor * sqrt(1 - sq(eccentricity));

  return b;
};
var e = function(semiminor, semimajor) {
  var e = 1 - (sq(semiminor) / sq(semimajor));

  return e;
};
var r = function(semimajor, eccentricity, angle) {
  var r = ((semimajor) * (1 - sq(eccentricity))) / (1 + (e * (cos(angle))));

  return r;

};

/***************************************************
 UNIVERSAL PLANETARY OBJECT
****************************************************/
var Planetghg = function(size, a, b, e, n, Mo, lan, lop, omega, lomega, perihelion, aperihelion, orbitalperiod, mass, GM, surfacegravity, i, colour) {
  this.size = size;
  this.a = a;
  this.b = b; //SemiMinor Axis 10^6 km
  this.e = e; //Eccentricity
  this.n = n; //Daily Motion
  this.Mo = Mo; //Mean Anomaly
  this.lan = lan; //longitude of ascending node
  this.lop = lop; //longitude of perihelion
  this.omega = omega;
  this.lomega = lomega;
  this.perihelion = perihelion;
  this.aperihelion = aperihelion;
  this.orbitalperiod = orbitalperiod;
  this.mass = mass; //Mass - 10^24
  this.GM = GM; //10^6 km^2/s^2
  this.surfacegravity = surfacegravity;
  this.i = i; //Orbital Inclination
  this.colour = colour;
};

/***************************************************
 PLANETARY DATA (STOCK)
****************************************************/
var sunInfo = {
  diameter: 2 * 695700, //km
  size: 20,
  x: width / 2,
  y: height / 2,
  col: color(238, 255, 0),
  mass: 1988500, //10^24 kgs
};
var earthInfo = {
  size: 10,
  a: 1.00000011, //AU
  b: b(149.6, 0.0167), //SemiMinor Axis 10^6 km
  e: 0.0167, //Eccentricity
  n: 0.985608, //Daily Motion
  Mo: 357.529, //Mean Anomaly
  lan: 174.873, //longitude of ascending node
  lop: 102.94719, //longitude of perihelion
  omega: 288.064,
  lomega: 174.873,
  perihelion: 147.09,
  aperihelion: 152.10,
  orbitalperiod: 365.2425,
  mass: 5.9723, //Mass - 10^24
  GM: 0.39860, //10^6 km^2/s^2
  surfacegravity: 9.798,
  i: 0, //Orbital Inclination
  colour: color(0, 51, 255),
};
var moonInfo = {
  /****EVERYTHING IS IN 10^6 KMs!*****/
  size: earthInfo.size * 0.0203,
  a: 0.3844, //SemiMajor Axis 10^6 Kms
  b: b(0.3844, 0.0549), //SemiMinor Axis 10^6
  e: 0.0549, //Eccentricity
  perihelion: 0.3633, //10^6 Kms
  apehelion: 0.4055, //10^6 Kms
  orbitalperiod: 27.3217, //Earth Days
  mass: 0.07346, //Mass - 10^24
  GM: 0.00490, //10^6 km^2/s^2
  surfacegravity: 1.62,
  i: 24, //Orbital Inclination
  Plongitude: 0, //Logitude of Perihelion
  colour: color(214, 214, 214),
};
var marsInfo = {
  size: 9,
  a: 1.52366231, //SemiMajor Axis AU
  b: b(1.52366231, 0.0935), //SemiMinor Axis AU
  e: 0.0935, //Eccentricity
  n: 0.524039,
  Mo: 19.373, //Mean Anomaly
  lop: 336.04084, //longitude of perihelion
  omega: 286.502,
  lomega: 49.558, //longitude of ascending node
  perihelion: 206.62,
  apehelion: 249.23,
  orbitalperiod: 686.973,
  mass: 0.64171, //Mass - 10^24
  GM: 0.042828, //10^6 km^2/s^2
  surfacegravity: 3.71,
  i: 1.850, //Orbital Inclination
  colour: color(227, 75, 4),
};
var jupiterInfo = {
  size: 9,
  a: 778.57, //SemiMajor Axis 10^6
  b: b(778.57, 0.0489), //SemiMinor Axis 10^6
  e: 0.0489, //Eccentricity
  perihelion: 740.52,
  apehelion: 816.62,
  orbitalperiod: 4330.595,
  mass: 1898.19, //Mass - 10^24
  GM: 126.687, //10^6 km^2/s^2
  surfacegravity: 24.79,
  i: 1.304, //Orbital Inclination
  Plongitude: 14.75385, //Logitude of Perihelion
  colour: color(255, 154, 107),
};
/***************************************************
 STEP 5 - UNIVERSAL PLANET FUNCTION! :-
 1. Still not working
 2. Not able to change the days.
 3. Planet not oriented with it's orbit.Maybe something's
    wrong with center coordinate.
 4.
****************************************************/

var Star = function(data) {
  draw = function() {
    fill(data.col);
    ellipse(data.x, data.y, data.size, data.size);
  };
};

var Planet = function(data) {
  /***************************************************
   FORMULAE
  ****************************************************/
  var b = function(semimajor, eccentricity) {
    var b = semimajor * sqrt(1 - sq(eccentricity));

    return b;
  };
  var e = function(semiminor, semimajor) {
    var e = 1 - (sq(semiminor) / sq(semimajor));

    return e;
  };
  var r = function(semimajor, eccentricity, angle) {
    var r = ((semimajor) * (1 - sq(eccentricity))) / (1 + (e * (cos(angle))));

    return r;

  };
  /***************************************************
         CONVERT DATE - NUMBER OF DAYS
         CREDITS-https://www.khanacademy.org/profile/BobLyon/
        ****************************************************/
  var newDate = function() {
    for (var args = [], i = 0; i < arguments.length; i++) {
      var a = arguments[i];
      if (typeof a === "string") {
        args.push("'" + a + "'");
      } else if (typeof a === "number") {
        args.push("" + a);
      } else {
        args.push("''");
      }
    }
    args = args.join(",");
    var F = (function(w) {
      return this[w];
    })("Function");
    F = F("dis", "with(dis)return new Date(" + args + ")");
    return F(this);
  };
  var startday = 0; //J200
  var dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];
  var startDate = newDate("1/1/2000");
  var days = 1460.5; //Number of Days
  var ms = days * 24 * 60 * 60 * 1000;
  var endDate = newDate(startDate.getTime() + ms);

  draw = function() {
    background(0, 0, 0);
    /***************************************************
     STEP 1 - MEAN ANOMALY :-
    ****************************************************/
    //days = days + 1;
    var Mo_1 = (data.Mo) + (data.n) * (days - startday);
    //Convert to Radians
    var Mo = [(Mo_1) % 360];
    /***************************************************
     STEP 2 - TRUE ANOMALY :-
    ****************************************************/
    var Ta = function(e, M) {
      var K = Math.PI / 180.0;
      var M = M * K;
      var e2 = Math.pow(e, 2);
      var e3 = Math.pow(e, 3);
      var e4 = 0;
      var e5 = 0;
      var kp3 = (M + (2 * e - 0.25 * e3 + 5 / 96 * e5) * Math.sin(M) + (1.25 * e2 - 11 / 24 * e4) * Math.sin(2 * M) + (13 / 12 * e3 - 43 / 64 * e5) * Math.sin(3 * M) + 103 / 96 * e4 * Math.sin(4 * M) + 1097 / 960 * e5 * Math.sin(5 * M)) / K;
      e4 = Math.pow(e, 4);

      var kp4 = (M + (2 * e - 0.25 * e3 + 5 / 96 * e5) * Math.sin(M) + (1.25 * e2 - 11 / 24 * e4) * Math.sin(2 * M) + (13 / 12 * e3 - 43 / 64 * e5) * Math.sin(3 * M) + 103 / 96 * e4 * Math.sin(4 * M) + 1097 / 960 * e5 * Math.sin(5 * M)) / K;
      e5 = Math.pow(e, 5);

      var kp5 = (M + (2 * e - 0.25 * e3 + 5 / 96 * e5) * Math.sin(M) + (1.25 * e2 - 11 / 24 * e4) * Math.sin(2 * M) + (13 / 12 * e3 - 43 / 64 * e5) * Math.sin(3 * M) + 103 / 96 * e4 * Math.sin(4 * M) + 1097 / 960 * e5 * Math.sin(5 * M)) / K;

      return kp3;
    };

    var Nu = Ta(data.e, Mo);

    /***************************************************
     STEP 3 - FIND RADIUS FROM FOCI :-
    ****************************************************/
    var or = (data.a * (1 - sq(data.e)) / [1 + (data.e * cos(Nu))]); //in AU

    /***************************************************
    STEP 4 - HELIOCENTRIC COORDINATES(hc) :-
    r is radius vector
    v is true anomaly
    o is longitude of ascending node
    p is longitude of perihelion
    i is inclination of plane of orbit
    ****************************************************/
    var hecX = or * (cos(data.lomega) * cos(data.omega + Nu)) - (sin(data.lomega) * cos(data.i) * sin(data.omega + Nu));

    var hecY = or * (sin(data.lomega) * cos(data.omega + Nu)) + (cos(data.lomega) * cos(data.i) * sin(data.omega + Nu));

    var planetX = -149.6 * hecX;
    //Have no Idea why it should be negative
    var planetY = 149.6 * hecY;
    /***************************************************
     STEP 5 - DRAW :-
    ****************************************************/
    var major = data.a * (149.6) * 2 * SCALE;
    var minor = data.b * 2 * SCALE;
    noFill();
    stroke(33, 33, 33);
    ellipse(300, 300, major, minor);
    fill(data.colour);
    ellipse(300 - planetX, 300 - planetY, data.size, data.size);

    var dists = dist(300 - planetX, 300 - planetY, 300, 300);
    /***************************************************
     CONSOLE (Only for Testing)
    ****************************************************/
    text(Mo, 27, 35);
    text("Mean Anomaly", 148, 35);

    text(days, 100 + 166, 20);
    text("Days", 148 + 170, 20);

    text(Nu, 100, 20);
    text("True Anomaly", 148, 20);

    text(or * 149.6, 266, 35);
    text("Radius", 320, 35);

    text(dists, 422, 35);
    text("Measured Dist", 468, 35);
  };

};

/***************************************************
 STEP 6 -  DRAW NEW PLANETS HERE
****************************************************/
var sun = new Star(sunInfo);

var earth = new Planet(earthInfo);

//var mars = new Planet(marsInfo);
/***************************************************
 STEP 7 -  GUI
****************************************************/
