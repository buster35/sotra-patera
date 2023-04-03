let finalPassword = "";
var promptFive = 0;
var generateBtn = document.querySelector("#generate"); //selecting the html button in JS, then storing this element in generateBtn variable//
generateBtn.addEventListener("click", writePassword); //Yes ok so listening for the "click" event on the button stored in the generateBtn variable; once this occurs, the writePassword function will run//

//START:
alert(
  "Welcome to the random password generator. The following prompts will ask for your input in order to create a randomly-generated password based on your preferences."
);

function randomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return index;
}

function logOne(promptOne) {
  if (promptOne === true && finalPassword.length < promptFive) {
    var index = randomIndex(lowerCase);
    finalPassword = finalPassword + lowerCase[index];
  }
}

function logTwo(promptTwo) {
  if (promptTwo === true && finalPassword.length < promptFive) {
    var index = randomIndex(upperCase);
    finalPassword = finalPassword + upperCase[index];
  }
}

function logThree(promptThree) {
  if (promptThree === true && finalPassword.length < promptFive) {
    var index = randomIndex(specialChars);
    finalPassword = finalPassword + specialChars[index];
  }
}

function logFour(promptFour) {
  if (promptFour === true && finalPassword.length < promptFive) {
    var index = randomIndex(numbers);
    finalPassword = finalPassword + numbers[index];
  }
}

function logFive() {
  promptFive = prompt(
    "How long would you like your password to be? Please enter a number value between 8 and 128."
  );
  if (promptFive >= 8 && promptFive <= 128) {
    var promptOne = confirm("Would you like to use lower-case letters?");
    var promptTwo = confirm("Would you like to use upper-case letters?");
    var promptThree = confirm(
      "Would you like to use special characters (recommended)?"
    );
    var promptFour = confirm("Would you like to use numbers?");
    for (i = 0; i < promptFive; i++) {
      logOne(promptOne);
      logTwo(promptTwo);
      logThree(promptThree);
      logFour(promptFour);
    }
  } else alert("Please enter a number value between 8 and 128");
}

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

var upperCase = lowerCase.map(function (x) {
  return x.toUpperCase(); //ok so here I'm using the .map method on the lowerCase array, in this case to call a callback function on every element (x) in the array and specifically mutating them with the .toUpperCase method//
});

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  logFive();
  return finalPassword;
}

//**When click event occurs we want to do something. To do something we use a function
// Write password to the #password input//this writes the randomly-generated pw to the textbox//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //selecting the password text input box, then storing this in LOCAL passwordText variable//
  passwordText.value = password; //this updates the passwordText.value to be the value within the "password" variable, which in turn runs the generatePassword function//
}
