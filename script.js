// // Assignment Code
// <button id="generate" class="btn">Generate Password</button>
var generateBtn = document.querySelector("#generate"); //Targets the generate button
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",]
// Need alerts for 
    // 1. How many characters the user wants to generate
    // 2. Use Lowercase?
    // 3. Use Uppercase?
    // 4. Use Numbers?
    // 5. Use Special Characters?

// // Write password to the #password input
function writePassword() {
  var password = generatePassword(); // Need to create (define) generatePassword function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    var passwordOption = []
    var finalPassword = []
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be between 8 and 128 characters");
        return;
    }
    var includeLowerCase = confirm("Would you like to include lowercase letters?");
    var includeUpperCase = confirm("Would you like to include uppercase letters?");
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeSpecialCharacters = confirm("Would you like to include special characters?");
    if (includeLowerCase === true) {
    passwordOption = passwordOption.concat(lowerCase);
    }
    if (includeUpperCase === true) {
    passwordOption = passwordOption.concat(upperCase);
    }
    if (includeNumbers === true) {
    passwordOption = passwordOption.concat(numbers);
    }
    if (includeSpecialCharacters === true) {
    passwordOption = passwordOption.concat(symbols);
    }
    console.log(passwordOption);
    for (var i = 0; i < passwordLength; i++) {
        // Math.floor(Math.random() * passwordOption.length);
        finalPassword.push(passwordOption[Math.floor(Math.random() * passwordOption.length)]);
    }
    return finalPassword.join("");
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. Prompt the user for the password criteria
//    a) Password length between 8 & 128 characters
//    b) Lowecase, Uppercase, numbers & special characters?


// 2. Validate the input
// 3. Generate password based on the criteria

// 4. Display the generated password on the page

// function generatePassword() {
//   console.log("You clicked the button - Great Job!")


//   return "Generated Password will go here!"; // The return needs to be the result of the function
// }
// const characterAmountRange = document.getElementById ('characterAmountRange');
// const characterAmountNumber = document.getElementById ('characterAmountNumber');
// const includeLowerCase = document.getElementById ('includeLowerCase');
// const includeUpperCase = document.getElementById ('includeUpperCase');
// const includeNumbers = document.getElementById ('includeNumbers');
// const includeSpecialCharacters = document.getElementById ('includeSpecialCharacters');
