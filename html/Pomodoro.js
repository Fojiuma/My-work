"use strict";

const longestBreak = document.querySelector(".longest-break");
const shortBreak = document.querySelector(".short-timer");
const longBreak = document.querySelector(".long-break");
const startNumber = document.getElementById("start-number");
shortBreak.addEventListener("click", function () {
  startNumber.textContent = `5:00`;
  document.querySelector("body").style.backgroundColor = "rgb(57, 112, 151);";
});
