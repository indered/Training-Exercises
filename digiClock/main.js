var clock = document.getElementById("digi-clock");
var wish = document.getElementById("wish");
var cal = document.getElementById("date");

function showMessage() {
    timestamp = new Date();
    var h = timestamp.getHours();


    var message;
    var updateTime;



    if (h >= 0 && h < 12) {
        message = 'Good Morning';
        updateTime = (12 - h) * 60 * 60 * 1000;
        setTimeout(showMessage, updateTime);
    } else if (h == 12) {
        message = "Good Noon";
        updateTime = 1000 * 60 * 60;
        setTimeout(showMessage, updateTime);
    } else if (h > 12 && h < 17) {
        message = "Good Afternoon";
    } else if (h >= 17 && h < 20) {
        message = 'Good Evening';
        updateTime = (20 - h) * 60 * 60 * 1000;
        setTimeout(showMessage, updateTime);

    } else if (h >= 20 && h < 24) {
        message = 'Good Night';
        updateTime = (24 - h) * 60 * 60 * 1000;
        setTimeout(showMessage, updateTime);
    }
    wish.innerHTML = message;


}

function showTime() {
    timestamp = new Date();
    var s = timestamp.getSeconds();
    var m = timestamp.getMinutes();
    var h = timestamp.getHours();
    var period = "AM";


    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        period = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    time = h + ":" + m + ":" + s + " " + period;

    clock.innerHTML = time;

    setTimeout(showTime, 1000);

}

function showDate() {
    timestamp = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    var date = timestamp.getDate();
    date = (date < 10) ? "0" + date : date;

    var day = weekDay[timestamp.getDay() - 1];

    var year = timestamp.getFullYear();
    var month = months[timestamp.getMonth()];
    var fulldate = day + ", " + date + " " + month + " " + year;
    cal.innerHTML = fulldate;

    if (timestamp.getHours() == 0)
        setTimeout(showDate, 24 * 60 * 60 * 1000);
}



function showClock() {
    var timestamp = new Date();
    showMessage();
    showTime();
    showDate();

}

showClock();