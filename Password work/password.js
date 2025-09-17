const displayBox = document.getElementById("password-display");

const length = 12;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = `!{},./;[]=-)(*&^%$#@#)`;
let eyeIcon = document.getElementById("invincible");

const allChars = lowerCase + upperCase + numbers + symbols;

const generateButton = document
  .getElementById("generate")
  .addEventListener("click", function () {
    let password = "";
    password +=
      lowerCase[Math.floor(Math.random(lowerCase) * lowerCase.length)];
    password +=
      upperCase[Math.floor(Math.random(upperCase) * upperCase.length)];
    password += numbers[Math.floor(Math.random(numbers) * numbers.length)];
    password += symbols[Math.floor(Math.random(symbols) * symbols.length)];

    while (length > password.length) {
      password += allChars[Math.floor(Math.random(allChars) * allChars.length)];
    }
    displayBox.value = password;
  });

const copyImg = document
  .getElementById("copy-img")
  .addEventListener("click", function () {
    displayBox.select();
    document.execCommand("copy");
  });

const passwordVisible = function () {
  if (displayBox.type == "text") {
    displayBox.type = "password";
    eyeIcon.src = "invincible password.png";
  } else {
    displayBox.type = "text";
    eyeIcon.src = "Screenshot 2025-09-17 133905.png";
  }
};
