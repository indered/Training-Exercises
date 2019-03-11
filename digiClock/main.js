var clock = document.getElementsByClassName("digi-clock");

var timestamp = new Date();
var s = timestamp.getSeconds();
var m = timestamp.getMinutes();
var h = timestamp.getHours();
var date = timestamp.getDate();
var day = timestamp.getDay();
var month = timestamp.getMonth();
var year = timestamp.getFullYear();
var period = "AM";
var wish;

function showClock() {

    if (h >= 0 && h < 12) {
        wish = 'Good Morning';
    }

    if (h == 12) {
        wish = 'Good Noon';
    }
    if (h > 12 && h < 17) wish = 'Good Afternoon';

    if(h>17 )

    if (h == 0) h = 12;

    if (h > 12) {
        h -= 12;
        period = "PM";
    }


}