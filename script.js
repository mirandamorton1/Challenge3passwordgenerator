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




 generateBtn.addEventListener("click", writePassword);



