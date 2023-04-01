// Assignment Code
var generateBtn = document.querySelector("#generate"); //selecting the html button in JS, then storing this element in generateBtn variable//
generateBtn.addEventListener("click", writePassword); //Yes ok so listening for the "click" event on the button stored in the generateBtn variable; once this occurs, the writePassword function will run//

//Create arrays for these:
var specialChars = [
  "!",
  "#",
  "#",
  "$",
  "%",
  "&",
  "'",
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
var randomNum = Math.floor(Math.random() * specialChars.length);
var randomChar = specialChars.at(randomNum); //need a method to print element instead of index number//
console.log(randomChar);
var lowerCase = [
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
// // var upperCase =
// console.log(upperCase);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//START: start by creating a prompt box on "click" event :)
//object.method not currently attached to anything; we want it to do something. Put it in a function:

function userInputs() {}
userInputs();

function generatePassword() {
  let;
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters// make 4 variables (one for each character type)//

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //selecting the password text input box, then storing this in LOCAL passwordText variable//

  passwordText.value = password; //this updates the passwordText.value to be the value within the "password" variable, which in turn runs the generatePassword function//
}
