function earth = {
    this.size: 10,
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
    i:0,  //Orbital Inclination
    colour:color(0, 51, 255),
}
