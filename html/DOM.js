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

const buttonTwo = document.querySelector("btn-2");

function alertBtn() {
  alert("I also Love Javascript");
}

buttonTwo.addEventListener("click", alertBtn);

//Change the bg color on mouseover

const newBackgroundColor = document.querySelector(".btn-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);
