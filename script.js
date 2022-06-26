// // Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e","f","g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var userInput = prompt ("Choose between 8-128 characters.");
//write this function
function generatePassword() {
console.log("Test");
}

while(userInput <=7 || userInput >=129 || userInput==""){
  alert("It must be between 8-128 characters");
}

if(userInput >=8 && userInput <=128){
  var userLower = confirm("Would you like lowercase letters?")
  console.log(lowerCase)

  var upperCase = confirm("Would you like uppercase letters?")
  console.log(upperCase);

  var randNumber = confirm("Would you like numbers?")
  console.log(randNumber);

  var randSymbol = confirm("Would you like symbols?");
  console.log(randSymbol);


pickOne()
}

function pickOne(){}
if(!lowerCase && !upperCase && !randNumber && !randSymbol){
  alert("You must pick at least one");

  generatePassword();
}

//in here, put all variables at the top

//variables declared
//function for length and validation
//function for character selection
//function for generating password
// calling the functions
// return password

// // Write password to the #password input
function writePassword() {
   var password = generatePassword(); //write this one
   var passwordText = document.querySelector("#password");


   passwordText.value = password;
 

// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);



// How long would you like your password to be? Must be between 8 and 128 characters. 

// Do you want it to include lower case?
// function lowerCase() {
//    return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
//  }
//  console.log(lowerCase());

// //Do you want it to include upper case?
// function upperCase() {
//   return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
// }
// console.log(upperCase());

// //Do you want to include numbers?
// function randNumber() {
//    return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
//  }

//  console.log(randNumber());


// //Do you want to include symbols?
//  function randSymbol() {
//    var randSymbol = '!@#$%^&*(){}[]=/,.';
//    return symbols [Math.floor(Math.random() * symbols.length)];
//  }
//  console.log(randSymbol());
// }




//ln 33 - funcion userCharOptions(){ - move all "vars' under generate". 






 

// const resultEl = document.getElementById('result');
// const lengthtEl = document.getElementById('length');
// const uppercasetEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowecase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   numbers: getRandomNumber,
//   symbol: getRandomSymbol,
// };

// generateEl.addEventListener('click', () => {
//   const hasLower = lowercaseEl.checked;
//   const hasUpper = uppercaseEl.checked;
//   const hasNumber = numbersEl.checked;
//   const hasSymbol = symbolsEl.checked;
  
//  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);
// });

// function generatePassword(lower, upper, number, symbol) {
  
//   let generatedPassword = '';

//   const typesCount = lower + upper + number + symbol;

//   console.log('typesCount: ', typesCount);

//   const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
//   (item => Object.values(item) [0]
//   );

//   console.log('typesArr: ', typesArr);

//   if(typesCount ===0) {
//     return '';
//   }
//   for(let i =0; i )
// }

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
// }

// console.log(getRandomLower());

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() *26)+ 65);
// }

// console.log(getRandomUpper());

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
// }

// console.log(getRandomNumber());

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*(){}[]=/,.';
//   return symbols [Math.floor(Math.random() * symbols.length)];
// }
// console.log(getRandomSymbol());
}