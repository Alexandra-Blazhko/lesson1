function timer() {
    let deadLine = '2019-12-27';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // var hourS = Math.floor((t/(1000/60/60) % 24);
        // var days = Math.floor((t/(1000*60*60*24)));

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.hours <= 9) {
                hours.textContent = "0" + t.hours;
            } else(hours.textContent = t.hours);

            if (t.minutes <= 9) {
                minutes.textContent = "0" + t.minutes;
            } else(minutes.textContent = t.minutes);

            if (t.seconds <= 9) {
                seconds.textContent = "0" + t.seconds;
            } else(seconds.textContent = t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }

    }

    setClock("timer", deadLine);

}

module.exports = timer;