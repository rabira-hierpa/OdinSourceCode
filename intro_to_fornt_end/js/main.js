// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// // Conditionals in java
// /*
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');
// } else {
//   alert('Awwww, but chocolate is my favorite...');
// }
// */
// //Functions in JavaScript
// function multiply(num1,num2) {
//   var result = num1 * num2;
//   if (num1 > num2) {
//     alert(num1 + ' is greater than ' + num2);
//   } else {
//     alert(num2 + ' is greater than ' + num1);
//   }
//   return result;
// }
// multiply(4,7);
// document.querySelector('img').onclick = function() {
//     alert('You clicked on the firefox image.');
// }
//
//
//
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox2.png') {
      myImage.setAttribute ('src','images/firefox.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox2.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Firefox ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Mozilla, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
