const displayBox = document.getElementById("password-display");

const length = 12;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = `!{},./;[]=-)(*&^%$#@#)`;

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

const closedEye = document
  .getElementById("invincible")
  .addEventListener("click", function () {});
