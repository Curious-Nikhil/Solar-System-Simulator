//Finds the difference between two dates.
function days(date1, date2) {
    /**********
    http://www.vijayjoshi.org/2008/10/24/faq-calculate-number-of-days-between-two-dates-in-javascript/
    ***********/
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()
    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)
    // Convert back to days and return
    //use floor for more accurate anwser
    return Math.round(difference_ms/ONE_DAY)
}

var d1 = new Date(2000, 0, 1)
var d2 = new Date(2017, 0, 1)
var d = days(d1, d2)
console.log(d);
