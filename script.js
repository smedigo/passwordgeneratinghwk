// Assignment Code
var generateBtn = document.querySelector("#generate");

var listOfNumbers = "0123456789";

var listOfLowCaseLetters = "abcdefghijklmnopqrstuvwxyz";

var listOfUpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var listOfSpecialChar = "!@$%&?*#";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  
  


  // DECLARE a new list of 'characterstouse' so we can put all the var above in one list array

  var randomPassword = "";

  const passwordLength = prompt("how long do you want your password to be?");
  
  
  if(!(passwordLength >8) || !(passwordLength <128)) {

    alert ("wrong");

    return;

  }
  
  const numbersUse = confirm("Do you want to use numbers?");
  const lowerCaseLettersUse = confirm("Do you want to use lower case letters?");
  const upperCaseLettersUse = confirm("Do you want to use upper case letters?");
  const specialCharUse = confirm("Do you want to use special characters?");

  

  var characterBase="";

  if (numbersUse === true) {
    characterBase = characterBase + listOfNumbers;
  }

  console.log(characterBase);

  if (lowerCaseLettersUse === true) {
    characterBase = characterBase + listOfLowCaseLetters;
  }

  if (upperCaseLettersUse === true) {
    characterBase = characterBase + listOfUpperCaseLetters;
  }
  console.log(characterBase);

  if (specialCharUse === true) {
    characterBase = characterBase + listOfSpecialChar ;
  }


  for (var i = 0; i < passwordLength; i++) {
    randomPassword += characterBase.charAt(Math.floor(Math.random() * characterBase.length));
  }

  console.log(randomPassword);
  return (randomPassword);


}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function (event) {
   
  writePassword()
});