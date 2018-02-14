//Date + No of days = Present Date
/*  var startday = 0;//J200
    var days =6000; //Number of Days to advance */
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
}
function DayDiff(startday, days) {
  var dayNames = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
  ];
  var startDate = newDate("1/1/2000");
  var ms = days*24*60*60*1000;
  var endDate = newDate(startDate.getTime() + ms);
  return endDate;
}
//To find no of days between two specific dates
/*
https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
*/
function dateDiff( str2 ) {
  var str1 = "1/1/2000"
  var diff =  Math.floor(( Date.parse(str2) - Date.parse(str1) ) / 86400000);
  return diff;
}

//Formula
function b (semimajor, eccentricity) {
  var b = semimajor * sqrt(1 - sq(eccentricity));
  return b;
}

function ecc (semiminor, semimajor) {
  var ecc = 1 - (sq(semiminor) / sq(semimajor));
  return ecc;
}

function radius (semimajor, eccentricity, angle) {
  var radius = ((semimajor) * (1 - sq(eccentricity))) / (1 + (eccentricity * (cos(angle))));
  return radius;

}
//Mean Anomoly

//True Anamoly
function TrueA(e, M) {
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
}

//heliocentric coordinates
function hecX(or, lomega, omega, i, Nu) {
  hecX = or * (cos(lomega)*cos(omega + Nu)) - (sin(lomega)*cos(i)*sin(omega + Nu));

  return hecx;
}
function hecY(or, lomega, omega, i, Nu) {
  hecX = or * (sin(lomega)*cos(omega + Nu)) + (cos(lomega)*cos(i)*sin(omega + Nu));

  return hecx;
}
