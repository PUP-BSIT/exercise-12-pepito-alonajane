let timer;
let count = 0;
const countDisplay = document.getElementById("count");
const start_btn = document.getElementById("start_btn");
const pause_btn = document.getElementById("pause_btn");
const resume_btn = document.getElementById("resume_btn");
const stop_btn = document.getElementById("stop_btn");

start_btn.addEventListener("click", startTimer);
pause_btn.addEventListener("click", pauseTimer);
resume_btn.addEventListener("click", resumeTimer);
stop_btn.addEventListener("click", stopTimer);

function startTimer() {
  timer = setInterval(updateCount, 1000);
  start_btn.disabled = true;
  pause_btn.disabled = false;
  resume_btn.disabled = true;
  stop_btn.disabled = false;
}

function pauseTimer() {
  clearInterval(timer);
  start_btn.disabled = true;
  pause_btn.disabled = true;
  resume_btn.disabled = false;
  stop_btn.disabled = false;
}

function resumeTimer() {
  timer = setInterval(updateCount, 1000);
  start_btn.disabled = true;
  pause_btn.disabled = false;
  resume_btn.disabled = true;
  stop_btn.disabled = false;
}

function stopTimer() {
  clearInterval(timer);
  count = 0;
  countDisplay.innerText = count;
  start_btn.disabled = false;
  pause_btn.disabled = true;
  resume_btn.disabled = true;
  stop_btn.disabled = true;
}

function updateCount() {
  count++;
  countDisplay.innerText = count;
}
