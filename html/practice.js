// "use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = [game.players];
let [gk, ...fieldplayers] = players1;
const allPlayers = [...players1, players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
  odds: { team1, x: draw, team2 },
} = game;

// let team1 = game.odds.team1;
// let draw = game.odds.x;
// let team2 = game.odds.team2;

const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoal("kimmich", "Davies", "muller", "lewandowski");
printGoal("kimmich", "Davies");
printGoal(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// const restaurant = {
//   name: "classic Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log("menu");

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// const guest = restaurant.numGuests || 10;

// console.log();
// restaurant.order && restaurant.order("mushrooms", "meat");

// const rest1 = {
//   name: "capri",
//   numGuests: 20,
// };
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;

// rest2.numGuests ??= 10;
// rest1.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log([i,j]);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//WHEN WE WANT TO DESTRUCTURE AN ARRAY WITH AN UNKNOWN LENGTH
// const [p = 1, q = 1, r = 1] = [8, 9];

// const modal = document.querySelector(".modal");
// const overLay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overLay.classList.remove("hidden");
// };
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overLay.classList.add("hidden");
// };
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overLay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

//PRACTICE
//PRACTICE
//PRACTICE
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const forecasted = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]} degrees Celcius in ${i + 1} in days...`;
//   }
//   console.log("..." + str);
// };
// forecasted(data1);
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTemp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTemp(temperatures);
// console.log(amplitude);
// // const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTempNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
// console.log(jonas.friends[0]);
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let i = 0; i <= bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);
// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage(totals));
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-------Exercise number ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repition ${rep}`);
//   }
// }
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// for (rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitiion ${rep}`);
// }
// const john = {
//   fullname: "John Muller",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);
// let jonas = {
//   firstName: "fojiuma",
//   lastName: "langaya",
//   birthYear: 1991,
//   job: "student",
//   friends: ["micheal", "emma", "hitman"],
//   hasDriversLicense: true,
//   caclAge: function (birthYear) {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.caclAge()} years old ${
//       this.job
//     } and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(jonas.getSummary());
// console.log(jonas["firstName"]);
// let Intrest = prompt("What do you want to know?");
// if (jonas[Intrest]) {
//   console.log(jonas[Intrest]);
// } else {
//   console.log("Wrong Request! What do you want to know?");
// }
// console.log(jonas.friends[0]);
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// let bills = [125, 555, 44];
// let tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tip);
// let totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// console.log(totals);
// let friends = ["one", "two", "three"];
// friends.push("four");
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.unshift("five");
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.includes("bob"));
// console.log(friends.includes("one"));
// function calcAverage(a, b, c) {
//   (a + b + c) / 3;
// }
// let dolphinavg = calcAverage(44, 23, 71);
// let koalasavg = calcAverage(65, 54, 49);
// function checkWinner(avgDolphins, avgKoalas) {
//   if (dolphinavg >= 2 * koalasavg) {
//     console.log(`The Dolphins win`);
//   } else if (koalasavg >= 2 * dolphinavg) {
//     console.log(`The koalas win `);
//   } else {
//     console.log(` The game is a draw`);
//   }
// }
// checkWinner(dolphinavg, koalasavg);
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// let ageOne = calcAge1(1991);
// console.log(ageOne);
// let bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
//     bill + tip
//   }`
// );
// let age = 23;
// drink = age >= 18 ? "You can drink wine" : "You can't drink wine";
// console.log(drink);
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// let weekDay = "monday";
// switch (weekDay) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meet up");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code Examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }
// if (weekDay === "moday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meet up");
// } else if (weekday === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (weekday === "wednesday" || "thursday") {
//   console.log("Write code Examples");
// } else if (weekday === "friday") {
//   console.log("Record videos");
// } else if (weekday === "saturday" || "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("INVALID DAY!");
// }
// let inputYear = "1991";
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// let massMark = 78;
// let massJohn = 95;
// let heightMark = 1.69;
// let heightJohn = 1.95;
// let markBMI = massMark / heightMark ** 2;
// let johnBMI = massJohn / heightJohn ** 2;
// const BMImark = markBMI > johnBMI;
// console.log(BMImark);
// let myName = "fojiuma";
// const Name = `i'm ${myName}`;
// console.log(Name);
// console.log(`string \n\
//     with\n\
//     multiple lines`);
// let personAge = [12, 15, 23, 34, 7, 20];
// for (let i = 0; i < personAge.length; i++) {
//   personAge = i;
//   if (personAge < 18) {
//     console.log(
//       `No license. You have ${18 - personAge} years left before you can drive!`
//     );
//   }
// }
// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is more than John's");
// } else {
//   console.log("Mark's BMI is less than John's");
// }
// let myLeads = []
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("save-el");
// const ulEl = document.getElementById("ul-el");
// let leadsFromLocalStorage =   JSON.parse(localStorage.getItem("myLeads"))
// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage
//   renderLeads()
// }
// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value); //to get the value of the input and store it in the array
//   inputEl.value = ""
//   renderLeads();
// });
// function renderLeads() {
//    let listItems = ""
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems +=`
//     <li>
//           <a target='_blank' href='${myLeads[i]}'>
//               ${myLeads[i]}
//            <a/>
//            </li>";
//     `
//Taking items from thE array and logging them out on nthe screen
//innerHtml makes use of html tags inside of javascript and lets you manipulate them without doing it from the html file directly
// "+=" lets you add a new element without losing what is already in the innerHTML
//THIS DOES THE SAME THING AS INNERHTML SHIT WRITTEN ABOVE
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
//   }
//   ulEl.innerHTML = listItems;
// }
// let player = {
//   name: "Fojiuma",
//   chips: "145",
// };
// let hasBlackJack = false;
// let isAlive = false;
// let sum = 0;
// let cards;
// let message = "";
// let CardsEl = document.getElementById("cards-el");
// let sumEl = document.querySelector("#sum-el");
// let messageEl = document.getElementById("message-el");
// let start = document.getElementById("start-el");
// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;
// console.log(cards);
// function getRandomCard() {
//   let randomNmunber = Math.floor(Math.random() * 13) + 1;
//   if (randomNmunber > 10) {
//     return 10;
//   } else if (randomNmunber === 1) {
//     return 11;
//   } else {
//     return randomNmunber;
//   }
// }
// function startGame() {
//   isAlive = true;
//   let firstcard = getRandomCard();
//   let secondcard = getRandomCard();
//   cards = [firstcard, secondcard];
//   sum = firstcard + secondcard;
//   renderGame();
// }
// function renderGame() {
//   CardsEl.textContent = "Cards: ";
//   for (i = 0; i < cards.length; i++) {
//     CardsEl.textContent += cards[i] + " ";
//   }
//   sumEl.textContent = "Sum: " + sum;
//   if (sum < 21) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "You've got black jack";
//     hasBlackJack = true;
//   } else if (sum > 21) {
//     message = "YOU ARE OUT OF THE GAME!";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
// }
// function newCard() {
//   if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     sum = sum + card;
//     cards.push(card);
//     renderGame();
//   }
// }
// let grabBox = document.getElementById("box")
// grabBox.addEventListener("click", function(){
//    console.log("I want to Open the Box ")
// })
// let largeCountries = [ "China", "India", "USA", "Indonesia", "Pakistan"]
// for (i = 0; i<largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }
// let dayOfMonth = 31
// let weekDay = "Friday"
// if (weekDay === "Friday" && dayOfMonth === 13 ) {
// console.log("spooky face")
// }
// let hands = ["rock", "paper", "scissor"]
// function shoot(){
//    let randomhands = Math.floor(Math.random() * 3)
// return hands[randomhands]
// }
// console.log(shoot())
// let person = {
// name: "fojiuma",
// age: 21,
// country: "Nigerian"
// }
// function logData(){
//     console.log(person.name + " is " + person.age + " Years old and lives in " + person.country )
// }
// logData()
// let age = 80;
// if (age < 6){
//     console.log("Free pass")
// }else if(age > 6 && age < 18){
// console.log("Child discount")
// }else if(age > 17 && age < 27){
//     console.log("Student Discount")
// }else if(age > 26 && age < 67){
//     console.log("Full price")
// }else{
//     console.log("Senior citizen discount")
// }
// let castleListing = {
// title: "Live like a king",
// price: 190,
// isSuperHost: true,
// images: ["img/castle.png", "img/castle2.png"]
// }
// console.log(castleListing.price)
// console.log(castleListing.images)
// let hasSolvedChallenge = false
// let hasHintLeft = false
// if(hasSolvedChallenge === false && hasHintLeft === false){
//     showSolution()
// }
// function showSolution() {
//     console.log("Showing the solution....")
// }
// let randomnumber =
// console.log(randomnumber)
// function rollDice() {
//     let flooredNumber = Math.floor(Math.random() * 7 ) + 1
//     return flooredNumber
// }
// console.log(rollDice())
// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     }else if(player1Time > player2Time){
//         return  player2Time
//     }else{
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)
// function totalRaceTime() {
//     return player1Time +player2Time
// }
// let totaltime = totalRaceTime()
// console.log(totaltime)
// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }
// for (let i = 10; i < 101;i += 10){
// console.log (i)
// }
//  let messages = [
//     "hey hows it going",
//     "im great",
//     "oya na we go word later",
//  ]
// //  i < length ensures that everything within the array is logged out to the console including newly added elements
// for (let i = 0; i < length; i += 1){
//     // console.log(messages[i])
// }
// let cards = [7, 3, 9]
// for (i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }
// let sentence = ["hello ", "my ", "name ", "is ", "fojiuma"]
// let greetingEl = document.getElementById("greeting-el")
// for (i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " ";
// }
// let firstname = "FOJIUMA"
// let lastname = " LANGAYA"
// let fullName = lastname + firstname;
// console.log(fullName);
// let mypoints = 3
// function add3points() {
// mypoints += 3
// }
// function remove1point() {
//     mypoints -= 1
// }
// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()
// console.log(mypoints)
// let errorEl = document.getElementById(error)
// function error() {
//      errorEl.textContent = "Something went wrong, please try again"
// }
// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let sumEl = document.getElementById("sum-el");
//  function add() {
//      let result = num1 +num2;
//      sumEl.textContent = "Sum: " + result;
//  }
//  function subtract() {
//     let result = num1 - num2;
//     sumEl.textContent = "subtraction: " + result
//  }
//  function divide() {
//     let result = num1 / num2;
//     sumEl.textContent = "division: " + result;
//  }
//  function multiply() {
//     let result = num1 * num2;
//     sumEl.textContent = "Multiplication: " + result;
//  }
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0;
// function increment() {
//     count += 1;
//     countEl.innerText= count
// }
// // text content makes it easier to read than innerText
// function save() {
//     let counter = count + " - "
//     saveEl.textContent += counter
//     countEl.textContent = 0;
//     console.log(count);
//     count = 0;
// }
// function number() {
// console.log(42)
// }
// number()
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function logtime() {
//     totaltime = lap1 + lap2 +lap3;
//     console.log(totaltime)
//     or
//     console.log(lap1 + lap2 + lap3)
// }
// logtime()
// function incrementLap() {
//     lapscompleted = lapscompleted + 1;
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapscompleted)
// let welcomeEl = document.getElementById("welcome-el")
// let name = "LANGAYA FOJIUMA"
// let greeting = "Welcome back "
// welcomeEl.innerHTML = greeting + name;
