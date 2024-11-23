



























































//ACCORDION JAVASCRIPT
// const accordion = document.getElementsByClassName('content-container');

// for (i = 0; i < accordion.length; i++ ){

//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active');    
//   })
// }

//MODAL DEVELOPEMENT
// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn');

// openBtn.addEventListener('click', function(){

//     modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', function(){
 
//   modalContainer.style.display = 'none';
// });

// window.addEventListener('click', function(e){
//   if(e.target === modalContainer){
//     modalContainer.style.display = 'none'
//   }
// });






// JAVASCRIPT FOR QUOTE GENERATOR
// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person')

// const quotes = [{
//    quote: `"The best way to find yourself is to lose yourself in the
//    service of others."`,
//    person: `mahatma gandhi`
// },{
//   quote: `"if you want to live a happy life, tie it to a goal, not to the people or things."`,
//   person: `albert einstein`
// }, {
//   quote: `"At his best, man is the noblest of all animals; seperated from law and justice he is the worst."`,
//   person: `Aristotle`
// },{
//   quote:`"Your time is limited,  so don't waste it living somone else's life."`,
//   person: `Steve Jobs`
// },{
//   quote:`"Tell me and I forgot. Teach me and I remember. Involve me and I learn. "`,
//   person: `Benjamin Franklin`
// },{
//   quote:`"If you look at what you have in life, you'll always more.If you look at what you don't have in life, you'll never have enough"`,
//   person:`Oprah Winfrey`
// }]

// btn.addEventListener('click', function(){

//   let random = Math.floor(Math.random() * quotes.length);

//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;

// })



//getElementById()
//getElementByClassName()
//getElementByTagName()
//querySelector()
//querySelectorAll()

//Creating new elements
//  const ul = document.querySelector('ul')
//  const li = document.createElement('li')

//adding element through javascript
//  ul.append(li)

//modifying the text
// li.innerText = "X-men"

//Styling the Attributes of the new element
// li.setAttribute('id', 'mainheading');
//gives the new attribute the styling of whatever is in the second apostrophe
// li.removeAttribute('id');
//remove the attribute

// li.remove();
//remove the element from the html elements

//using the alert() 
// const buttonTwo = document.querySelector("btn-2");

// function alertBtn() {
//   alert("I also Love Javascript");
// }

// buttonTwo.addEventListener("click", alertBtn);

//Change the bg color on mouseover

// const newBackgroundColor = document.querySelector(".btn-3");

// function changeBgColor() {
//   newBackgroundColor.style.backgroundColor = "blue";
// }
// newBackgroundColor.addEventListener("mouseover", changeBgColor);


// document.querySelector("btn-3").addEventListener
// ("click", function(e) {
//   console.log(e.target.innerText = "clicked");
// },true) 

//PreventDefault() method stops the default setting placed on any element

//Event delegation allows you to add a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that matcha selector


//MATCHES() method is used to check a condition if the selected element matches the styling we want to apply.


