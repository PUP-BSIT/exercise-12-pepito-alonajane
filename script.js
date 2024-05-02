let timer;
let count = 0;
const countDisplay = document.getElementById("count");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
  timer = setInterval(updateCount, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
  stopBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(timer);
  startBtn.disabled = true;
  pauseBtn.disabled = true;
  resumeBtn.disabled = false;
  stopBtn.disabled = false;
}

function resumeTimer() {
  timer = setInterval(updateCount, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timer);
  count = 0;
  countDisplay.innerText = count;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
  stopBtn.disabled = true;
}

function updateCount() {
  count++;
  countDisplay.innerText = count;
}
