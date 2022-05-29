const startTimerButton = document.querySelector('#startTimerButton');
const stopTimerButton = document.querySelector('#stopTimerButton');
const minutesSelect = document.querySelector('#minutesSelect');
const timeDisplay = document.querySelector('#timeDisplay');
let sound = new Audio('/audio-files/iphone_alarm.mp3');

let startTime;
let interval; //declaring this variable outside of the function allows me to access the interval variable with both buttons.

minutesSelect.addEventListener('change', function () {
    startTime = this.value;
    timeDisplay.innerText = `${startTime}:00`
})

startTimerButton.addEventListener('click', timeControl);

function timeControl() {
    let startTimeInSeconds = startTime * 60;
    interval = setInterval(countdown, 1000);
    function countdown() {
        let minutes = Math.floor(startTimeInSeconds / 60);
        let seconds = startTimeInSeconds % 60;
        if (startTimeInSeconds >= 0) {
            if (seconds < 10) {
                timeDisplay.innerText = `${minutes}:0${seconds}`;
            } else {
                timeDisplay.innerText = `${minutes}:${seconds}`;
            }
            startTimeInSeconds--;
        } else {
            timeDisplay.innerText = 'Time is up!';
            sound.play();
            clearInterval(interval);
        }
    }
};

//button to stop timer, display time stopped text, and stop alarm sound
stopTimerButton.addEventListener('click', function () {
    timeDisplay.innerText = 'Timer stopped'
    sound.pause();
    clearInterval(interval);
});
//double click to clear interval and reset the timer
stopTimerButton.addEventListener('dblclick', function () {
    timeDisplay.innerText = '0:00'
    clearInterval(interval);
});



