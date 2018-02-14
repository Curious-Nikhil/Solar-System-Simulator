//Universal Planet Function

function Planet = {
  this.a = a;
  this.e = e;
  this.b = function(){
    return = this.a*(sqrt(1 - sq(this.e)));
  }
}

function Planet  {
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
    this.col = col;
}



/***************************************************
 PLANETARY DATA
****************************************************/
var b = function (semimajor,eccentricity) {
    var b = semimajor*sqrt(1 - sq(eccentricity));

    return b;
};
var e = function (semiminor, semimajor) {
    var e = 1 - (sq(semiminor)/sq(semimajor));

    return e;
};
var r = function (semimajor, eccentricity, angle) {
    var r = ((semimajor)*(1 - sq(eccentricity)))/(1 + (e * (cos(angle))));

    return r;

};

/***************************************************
 UNIVERSAL PLANETARY OBJECT
****************************************************/
var PlanetData = function(size, a, b, e, n, Mo, lan, lop, omega, lomega, perihelion, aperihelion, orbitalperiod, mass, GM, surfacegravity, i, colour) {
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

/***************************************************
 PLANETARY DATA (STOCK)
****************************************************/
var sunInfo = {
    diameter:2 * 695700, //km
    size:20,
    x:width/2,
    y:height/2,
    col:color(238, 255, 0),
    mass:1988500, //10^24 kgs
};
var earthInfo = {
    size: 10,
    a:1.00000011, //AU
    b:b(149.6,0.0167),//SemiMinor Axis 10^6 km
    e:0.0167,//Eccentricity
    n:0.985608,//Daily Motion
    Mo:357.529, //Mean Anomaly
    lan:174.873,//longitude of ascending node
    lop:102.94719,//longitude of perihelion
    omega:288.064,
    lomega:174.873,
    perihelion:147.09,
    aperihelion:152.10,
    orbitalperiod:365.2425,
    mass:5.9723,//Mass - 10^24
    GM:0.39860, //10^6 km^2/s^2
    surfacegravity:9.798,
    i:0, //Orbital Inclination
    colour:color(0, 51, 255),
};
var moonInfo = {
    /****EVERYTHING IS IN 10^6 KMs!*****/
    size:earthInfo.size*0.0203,
    a:0.3844, //SemiMajor Axis 10^6 Kms
    b:b(0.3844,0.0549),//SemiMinor Axis 10^6
    e:0.0549,//Eccentricity
    perihelion:0.3633, //10^6 Kms
    apehelion:0.4055,  //10^6 Kms
    orbitalperiod:27.3217, //Earth Days
    mass:0.07346,//Mass - 10^24
    GM:0.00490, //10^6 km^2/s^2
    surfacegravity:1.62,
    i:24, //Orbital Inclination
    Plongitude:0,//Logitude of Perihelion
    colour:color(214, 214, 214),
};
var marsInfo = {
    size:9,
    a:1.52366231, //SemiMajor Axis AU
    b:b(1.52366231,0.0935),//SemiMinor Axis AU
    e:0.0935,//Eccentricity
    n:0.524039,
    Mo:19.373, //Mean Anomaly
    lop:336.04084,//longitude of perihelion
    omega:286.502,
    lomega:49.558,//longitude of ascending node
    perihelion:206.62,
    apehelion:249.23,
    orbitalperiod:686.973,
    mass:0.64171,//Mass - 10^24
    GM:0.042828, //10^6 km^2/s^2
    surfacegravity:3.71,
    i:1.850, //Orbital Inclination
    colour:color(227, 75, 4),
};
var jupiterInfo = {
    size:9,
    a:778.57, //SemiMajor Axis 10^6
    b:b(778.57,0.0489),     //SemiMinor Axis 10^6
    e:0.0489,//Eccentricity
    perihelion:740.52,
    apehelion:816.62,
    orbitalperiod:4330.595,
    mass:1898.19,//Mass - 10^24
    GM:126.687, //10^6 km^2/s^2
    surfacegravity:24.79,
    i:1.304, //Orbital Inclination
    Plongitude:14.75385,//Logitude of Perihelion
    colour:color(255, 154, 107),
};
/***************************************************
 STEP 5 - UNIVERSAL PLANET FUNCTION! :-
 1. Still not working
 2. Not able to change the days.
 3. Planet not oriented with it's orbit.Maybe something's
    wrong with center coordinate.
 4.
****************************************************/
