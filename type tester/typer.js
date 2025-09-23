const displayArea = document.getElementById("typeArea");
const startOver = document.getElementById("start");
const starter = document.getElementById("kick-off");
const originText = document.getElementById("origin-text");
var timer = [0, 0, 0, 0];

function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

function runTimer() {
  let currentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
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
  let originTextMatch = originText.subString(0, textEntered.length);

  if (textEntered == originText) {
    displayArea.style.borderColor = "#429890";
  } else if (textEntered == originTextMatch) {
    displayArea.style.borderColor = "#65CCF3";
  } else {
    displayArea.style.borderColor = "#E95D0F";
  }
}

function reset() {
  console.log("key pressed");
}
displayArea.addEventListener("keypress", start, false);
displayArea.addEventListener("keyup", SpellCheck, false);
startOver.addEventListener("click", reset, false);
