// Assignment Code
var generateBtn = document.querySelector("#generate"); //selecting the html button in JS, then storing this element in generateBtn variable//
generateBtn.addEventListener("click", writePassword); //Yes ok so listening for the "click" event on the button stored in the generateBtn variable; once this occurs, the writePassword function will run//

//START: start by creating a prompt box on "click" event :)
alert(
  "Welcome to the random password generator. The following prompts will ask for your input in order to create a randomly-generated password based on your preferences."
);

let userArray = []

var promptOne = confirm("Would you like to use lower-case letters?");
function logOne() {
  if (promptOne == true) {
    userArray.unshift(1);
    confirm("Ok, we'll include lower-case letters in your password.");
  } else {
    userArray.unshift(0);
    confirm("Ok, we won't include lower-case letters in your password");
  }
}
logOne();

var promptTwo = confirm("Would you like to use upper-case letters?");
function logTwo() {
  if (promptTwo == true) {
    userArray.push(1);
    confirm("Ok, we'll include upper-case letters in your password.");
  } else {
    userArray.push(0);
    confirm("Ok, we won't include lower-case letters in your password");
  }
}
logTwo();

var promptThree = confirm(
  "Would you like to use special characters (recommended)?"
);
function logThree() {
  if (promptThree == true) {
    userArray.push(1);
    confirm("Ok, we'll include special characters in your password.");
  } else {
    userArray.push(0);
    confirm("Ok, we won't include special characters in your password");
  }
}
logThree();

var promptFour = confirm("Would you like to use numbers?");
function logFour() {
  if (promptFour == true) {
    userArray.push(1);
    confirm("Ok, we'll include numbers in your password.");
  } else {
    userArray.push(0);
    confirm("Ok, we won't include numbers in your password");
  }
}
logFour();

var promptFive = prompt(
  "Lastly, how long would you like your password to be? Please enter a number value between 8 and 128."
);
function logFive() {
  if (promptFive >= 8 && promptFive <= 128) {
    userArray.push(Number(promptFive));
  } else alert("Please enter a number value between 8 and 128");
}
logFive();

let userInputs = [];
let userTotal = userArray.concat(userInputs);
console.log(userTotal);

function getRandomInt() {
  min = Math.ceil(0);
  max = Math.floor(userTotal[4]);
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt());

let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function userTally () {
  if (userTotal[0] === 1) {
    let run = getRandomInt();
    for (let i = 0; i < run; i++) {
      function getRandom(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;//trying to find a way to use for loop to select a random index from lowerCase "run" # of times//
    }
  getRandom(0, lowerCase.length - 1)}}}
    ;
console.log(userTally());
//   }
//   if (userTotal[1] === 1) {
//     return getRandomInt();
//   }
//   if (userTotal[2] === 1) {
//     return getRandomInt();
//   }
//   if (userInputs[3] === 1) {
//     return getRandomInt();
//   }
// };
// console.log(userTally())
var specialChars = [
  "!",
  "#",
  "#",
  "$",
  "%",
  "&",
  "'",
  '"',
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  " ",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// console.log(randomChar); //create a for loop to log (x) # of special characters?//

var upperCase = lowerCase.map(function (x) {
  return x.toUpperCase(); //ok so here I'm using the .map method on the lowerCase array, in this case to call a callback function on every element (x) in the array and specifically mutating them with the .toUpperCase method//
});
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  var randomNum = Math.floor(Math.random() * Array.length); //generic method applied to any array to output random index #?//
  var randomChar = Array.at(randomNum);
}

//**When click event occurs we want to do something. To do something we use a function
// Write password to the #password input//this writes the randomly-generated pw to the textbox//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //selecting the password text input box, then storing this in LOCAL passwordText variable//

  passwordText.value = password; //this updates the passwordText.value to be the value within the "password" variable, which in turn runs the generatePassword function//
}
