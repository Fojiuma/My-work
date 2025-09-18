const displayText = document.getElementById("display-menu");

const addition = document
  .getElementById("plus")
  .addEventListener("click", function (a, b) {
    let sum = a + b;
    // displayText += sum;
    return sum;
  });

console.log(addition(5, 6));
