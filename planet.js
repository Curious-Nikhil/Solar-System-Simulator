
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
