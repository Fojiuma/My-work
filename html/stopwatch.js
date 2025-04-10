let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displaytime");
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime.innerHTML = hours + ": " + minutes + ": " + seconds;
}
function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  setInterval(stopWatch, 1000);
}
 