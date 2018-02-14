/***************************************************
REQUIRED TO PORT!
************************************************/

var Planet = function(data) {
        /***************************************************
         FORMULAE
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
            var r = ((semimajor)*(1 - sq(eccentricity)))/(1 + (e *      (cos(angle))));

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
            var F = (function(w) { return this[w]; })("Function");
            F = F("dis", "with(dis)return new Date(" +  args + ")");
            return F(this);
        };
        var startday = 0;//J200
        var dayNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ];
        var startDate = newDate("1/1/2000");
        var days =1460.5; //Number of Days
        var ms = days*24*60*60*1000;
        var endDate = newDate(startDate.getTime() + ms);

    draw = function() {
        background(0, 0, 0);
        /***************************************************
         STEP 1 - MEAN ANOMALY :-
        ****************************************************/
        //days = days + 1;
        var Mo_1 = (data.Mo) + (data.n)*(days - startday);
        //Convert to Radians
        var Mo =[(Mo_1) % 360];
        /***************************************************
         STEP 2 - TRUE ANOMALY :-
        ****************************************************/
        var Ta = function (e,M) {
        var K = Math.PI/180.0;
        var M = M*K;
        var e2 = Math.pow(e,2);
        var e3 = Math.pow(e,3);
        var e4 = 0;
        var e5 = 0;
        var kp3 = (M+(2*e-0.25*e3+5/96*e5)*Math.sin(M)+(1.25*e2-11/24*e4)*Math.sin(2*M)+(13/12*e3-43/64*e5)*Math.sin(3*M)+103/96*e4 *Math.sin(4*M)+1097/960*e5*Math.sin(5*M))/K;
        e4=Math.pow(e,4);

        var kp4 = (M+(2*e-0.25*e3+5/96*e5)*Math.sin(M)+(1.25*e2-11/24*e4)*Math.sin(2*M)+(13/12*e3-43/64*e5)*Math.sin(3*M)+103/96*e4 *Math.sin(4*M)+1097/960*e5*Math.sin(5*M))/K;
        e5=Math.pow(e,5);

        var kp5 = (M+(2*e-0.25*e3+5/96*e5)*Math.sin(M)+(1.25*e2-11/24*e4)*Math.sin(2*M)+(13/12*e3-43/64*e5)*Math.sin(3*M)+103/96*e4 *Math.sin(4*M)+1097/960*e5*Math.sin(5*M))/K;

        return kp3;
        };

        var Nu = Ta(data.e, Mo);

        /***************************************************
         STEP 3 - FIND RADIUS FROM FOCI :-
        ****************************************************/
        var or =(data.a* (1 - sq(data.e))/[1 + (data.e * cos(Nu))]);//in AU

        /***************************************************
        STEP 4 - HELIOCENTRIC COORDINATES(hc) :-
        r is radius vector
        v is true anomaly
        o is longitude of ascending node
        p is longitude of perihelion
        i is inclination of plane of orbit
        ****************************************************/
        var hecX = or * (cos(data.lomega)*cos(data.omega + Nu)) - (sin(data.lomega)*cos(data.i)*sin(data.omega + Nu));

        var hecY = or * (sin(data.lomega)*cos(data.omega + Nu)) + (cos(data.lomega)*cos(data.i)*sin(data.omega + Nu));

        var planetX = -149.6*hecX;
        //Have no Idea why it should be negative
        var planetY = 149.6*hecY;
        /***************************************************
         STEP 5 - DRAW :-
        ****************************************************/
        var major = data.a*(149.6) * 2 * SCALE;
        var minor = data.b * 2 * SCALE;
        noFill();
        stroke(33, 33, 33);
        ellipse(300, 300, major, minor);
        fill(data.colour);
        ellipse(300-planetX,300-planetY, data.size, data.size);

        var dists = dist(300 - planetX,300 - planetY,300,300);
        /***************************************************
         CONSOLE (Only for Testing)
        ****************************************************/
        text(Mo,27,35);
        text("Mean Anomaly",148,35);

        text(days,100 + 166,20);
        text("Days",148 +170,20);

        text(Nu,100,20);
        text("True Anomaly",148,20);

        text(or * 149.6,266,35);
        text("Radius",320,35);

        text(dists,422,35);
        text("Measured Dist",468,35);
    };

};
