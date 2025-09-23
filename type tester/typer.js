const displayArea = document.getElementById("typeArea");
const startOver = document.getElementById("start");
const starter = document.getElementById("timer-start");

var timer = [0, 0, 0, 0];

function runTimer() {
  let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
  starter.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100) - timer[0] * 60;
  timer[2] = Math.floor(timer[3] - timer[1] * 100) - timer[0] * 6000;
}
function start() {
  let textEntered = displayArea.value.length;
  if (textEntered === 0) {
    setInterval(runTimer, 10);
  }
}
function SpellCheck() {
  let textEnterd = displayArea.value;
}

function reset() {
  console.log("key pressed");
}
displayArea.addEventListener("keypress", start, false);
displayArea.addEventListener("keyup", SpellCheck, false);
startOver.addEventListener("click", reset, false);
