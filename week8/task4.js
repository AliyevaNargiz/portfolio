$(document).ready(function () {
    let timer;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    
    function startTimer() {
        timer = setInterval(function () {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        clearInterval(timer);
                    }
                }
            }
            updateTimerDisplay();
        }, 1000);
    }

    function updateTimerDisplay() {
        $('#hours').text(hours.toString().padStart(2, '0'));
        $('#minutes').text(minutes.toString().padStart(2, '0'));
        $('#seconds').text(seconds.toString().padStart(2, '0'));
    }

    function resetTimer() {
        clearInterval(timer);
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateTimerDisplay();
    }

    $('#start').click(function () {
        hours = parseInt($('#hoursInput').val()) || 0;
        minutes = parseInt($('#minutesInput').val()) || 0;
        seconds = parseInt($('#secondsInput').val()) || 0;

        if (hours > 0 || minutes > 0 || seconds > 0) {
            startTimer();
        }
    });

    $('#reset').click(function () {
        resetTimer();
    });
});
