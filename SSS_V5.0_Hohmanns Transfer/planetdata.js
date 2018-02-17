function earth_data() {
    this.size=10;
    this.a =1.00000011; //AU
    this.e=0.0167;//Eccentricity
    this.n=0.985608;//Daily Motion
    this.Mo=357.529; //Mean Anomaly
    this.omega=288.064;
    this.capomega=174.873;
    this.orbitalperiod=365.2425;
    this.mass=5.9723;//Mass - 10^24
    this.surfacegravity=9.798;
    this.i=0;  //Orbital Inclination
    this.col=colour(5, 0, 255); //dark blue
}

function marsdata() {
    this.size=10;
    this.a=1.52366231; //SemiMajor Axis AU
    this.e=0.0935;//Eccentricity
    this.n=0.524039;
    this.Mo=19.373; //Mean Anomaly
    this.omega=286.502;
    this.capomega=49.558;//longitude of ascending node
    this.mass=0.64171;//Mass - 10^24
    this.i=1.850; //Orbital Inclination
    this.col=colour(255, 84, 0); //Martian red
}
