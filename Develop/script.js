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
var upperCase = lowerCase.map(function (x) {
  return x.toUpperCase(); //ok so here I'm using the .map method on the lowerCase array, in this case to call a callback function on every element (x) in the array and specifically mutating them with the .toUpperCase method//
});
console.log(upperCase);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//START: start by creating a prompt box on "click" event :)

function userInputs() {}

function generatePassword() {
  var randomNum = Math.floor(Math.random() * Array.length); //generic method applied to any array to output random index #?//
  var randomChar = Array.at(randomNum);
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//**When click event occurs we want to do something. To do something we use a function

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
