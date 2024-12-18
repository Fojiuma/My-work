let [seconds, minutes,hours] = [0,0,0];
let displayTime = document.getElementById("display-Time");

function increaseStopWatch(){


if(seconds === 60, seconds++ ){
    seconds = 0;
    minutes++;
}
if(minutes === 60){
    minutes = 0;
    hours++;
}}