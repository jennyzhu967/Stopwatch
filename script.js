const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let [seconds, minutes, hours] = [0, 0, 0];

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 75);
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});

resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalID);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    [seconds, minutes, hours] = [0, 0, 0];
    timeDisplay.textContent = "00 : 00 : 00";
});


function updateTime() {
    elapsedTime = Date.now() - startTime; // in miliseconds

    // milliseconds = Math.floor(elapsedTime);
    // milliseconds.toFixed(3);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    let h = hours < 10 ? "0" + hours : hours;
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;
    timeDisplay.textContent = `${h} : ${m} : ${s}`; // template literal
}