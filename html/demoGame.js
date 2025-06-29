const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Input a value";
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //
      displayMessage(
        (document.querySelector(".message").textContent =
          guess > secretNumber ? "too High" : "too Low! ")
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game😞");
      document.querySelector("body").style.backgroundColor = "#ba4949";
      //   document.querySelector(".message").textContent = "You lost the game😞";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  displayMessage("Start guessing...");
  //   document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
