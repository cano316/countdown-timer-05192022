const startTimerButton = document.querySelector('#startTimerButton');
const stopTimerButton = document.querySelector('#stopTimerButton');


minutesSelect.addEventListener('change', function () {
    timeDisplay.innerText = `${this.value}:${secondsSelect.value}`
});
secondsSelect.addEventListener('change', function () {
    timeDisplay.innerText = `${minutesSelect.value}:${this.value}`
});

startTimerButton.addEventListener('click', function () {
    const minutes = minutesSelect.value;
    const seconds = secondsSelect.value;
    timeControl(minutes, seconds);
})

//original code
// function timeControl(minutes, seconds) {
//     const timeDisplay = document.querySelector('#timeDisplay');
//     const interval = setInterval(countDown, 1000);
//     function countDown() {
//         if (seconds < 10) {
//             timeDisplay.innerText = `${minutes}:0${seconds}`;
//         } else {
//             timeDisplay.innerText = `${minutes}:${seconds}`;
//         }
//         seconds--;
//         if (seconds == 00) {
//             minutes--;
//             seconds = 59;
//             if (minutes == 0) {
//                 clearInterval(interval);
//             }
//         }

//     }
// }

function timeControl(minutes, seconds) {
    const timeDisplay = document.querySelector('#timeDisplay');
    const interval = setInterval(countDown, 1000);
    stopTimerButton.addEventListener('click', function () {
        clearInterval(interval);
        minutes = 0;
        seconds = 0;
        timeDisplay.innerText = `${minutes}:0${seconds}`;
    })
    function countDown() {
        if (seconds < 10) {
            timeDisplay.innerText = `${minutes}:0${seconds}`;
        } else {
            timeDisplay.innerText = `${minutes}:${seconds}`;
        }
        seconds--;
        if (seconds == 0) {
            minutes--;
            seconds = 59;
            if (minutes == 0) {
                clearInterval(interval);
            }
        }
    }
};
//having issues if I set the timer to 15 seconds. It counts down to 0:00, then skips to -1:59
//How could I fix this?

