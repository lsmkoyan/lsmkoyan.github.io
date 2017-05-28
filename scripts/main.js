// Image changer functionality
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/chrome_icon.png') {
      myImage.setAttribute ('src','images/chrome_original_icon.png');
    } else {
      myImage.setAttribute ('src','images/chrome_icon.png');
    }
}

// Personalized welcome message functionality
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Chrome Canary is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Chrome Canary is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}