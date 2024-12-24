// let [seconds, minutes,hours] = [0,0,0];
// let displayTime = document.getElementById("display-Time");
// let timer;

// function increaseStopWatch(){


// if(seconds === 60, seconds++ ){
//     seconds = 0;
//     minutes++;
// }
// if(minutes === 60){
//     minutes = 0;
//     hours++;
// }}

// function watch(){
    
// }




















const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");//to get elements nested in another element

var altTEXT = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption")

captionElement.appendChild("altTEXT")