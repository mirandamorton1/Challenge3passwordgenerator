// // Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyz"
var passwordLength = prompt ("Choose between 8-128 characters.");
//write this function
function generatePassword() {
console.log(result);
return result;
}

while(passwordLength <=7 || passwordLength >=129 || passwordLength==""){
  alert("It must be between 8-128 characters");
  passwordLength = prompt("Invalid entry: please enter a number between 8 and 128");
}

function writePassword () {
var upperCase = confirm("Do you want upper case letters?")

var randNumber = confirm ("Do you want to use numbers?")

var randSymbols = confirm ("Do you want to use symbols?") 
  var result = '';
  if(randNumber === true) {
    characters = characters+"0123456789"
  }
  if(upperCase === true) {
    characters = characters+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (randSymbols === true) {
    characters = characters+"!@#$%^&*()"
    console.log(characters)
  }
  var characterLength = characters.length
  console.log(characterLength);

  for(var i =0; i< passwordLength; i ++){
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }
var text = document.getElementById("password")
text.textContent = result
  return result;

}



// pickOne()


// function pickOne(){}
// if(!lowerCase && !upperCase && !randNumber && !randSymbol){
//   alert("You must pick at least one");

//   generatePassword();
// }

// //in here, put all variables at the top

// //variables declared
// //function for length and validation
// //function for character selection
// //function for generating password
// // calling the functions
// // return password

// // // Write password to the #password input
// function writePassword() {
//    var password = generatePassword(); //write this one
//    var passwordText = document.querySelector("#password");


//    passwordText.value = password;
 

// // // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


// // //Do you want it to include lower case?
// // function lowerCase() {
// //    return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
// //  }
// //  console.log(lowerCase());

// // //Do you want it to include upper case?
// // function upperCase() {
// //   return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
// // }
// // console.log(upperCase());

// // //Do you want to include numbers?
// // function randNumber() {
// //    return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
// //  }

// //  console.log(randNumber());


// //Do you want to include symbols?
//  function randSymbol() {
//    var randSymbol = '!@#$%^&*(){}[]=/,.';
//    return symbols [Math.floor(Math.random() * symbols.length)];
//  }
//  console.log(randSymbol());
// }

 

// // const resultEl = document.getElementById('result');
// // const lengthtEl = document.getElementById('length');
// // const uppercasetEl = document.getElementById('uppercase');
// // const lowercaseEl = document.getElementById('lowecase');
// // const numbersEl = document.getElementById('numbers');
// // const symbolsEl = document.getElementById('symbols');
// // const generateEl = document.getElementById('generate');
// // const clipboardEl = document.getElementById('clipboard');

// // const randomFunc = {
// //   lower: getRandomLower,
// //   upper: getRandomUpper,
// //   numbers: getRandomNumber,
// //   symbol: getRandomSymbol,
// // };

// // generateEl.addEventListener('click', () => {
// //   const hasLower = lowercaseEl.value;
// //   const hasUpper = uppercaseEl.value;
// //   const hasNumber = numbersEl.value;
// //   const hasSymbol = symbolsEl.value;
  
// //  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);
// // });

// // function Password(lower, upper, number, symbol) {
  
// //   var Password = '';

// //   const typesCount = lower + upper + number + symbol;

// //   console.log('typesCount: ', typesCount);

// //   const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
// //   (item => Object.values(item) [0]
// //   );

// //   console.log('typesArr: ', typesArr);

// //   if(typesCount ===0) {
// //     return '';
// //   }
//   for(var i =0; i<passwordLength; i ++);
// result+= lowerCase

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
