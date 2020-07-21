/********************************
 
   Random Password Generator
   Author: Connor Melton
   Date: 07/20/2020 

*********************************/


//Character subsets for user specified password content
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const SPECIAL_CHARS = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const NUMERIC_CHARS = "1234567890";

//Valid password lengths
const MIN_LENGTH = 8;
const MAX_LENGTH = 128;

// Generates a random password and sets textarea with id 'password' equal to it
// Input: None
// Return: None
function generatePassword() {

    alert("Beginning password generation");

    //Prompts user for password length
    let length = getLength();

    //Generates password with user specifications
    let password = createPassword(length);

    //Changes textarea content to randomly generated password
    document.querySelector("#password").textContent = password;

}

// Prompts user for password length and checks for valid input (8 >= x >= 128).
// Input : None
// Return : Number
function getLength() {

    let length = parseInt(prompt("Enter a number between 8 and 128 for password length."));

    //Checks for a valid length from user
    while (isNaN(length) || (length < MIN_LENGTH || length > MAX_LENGTH)) {
        length = parseInt(prompt("Error - Invalid Input : Enter a number between 8 and 128 for password length."));
    }

    return length;
}

// Returns a randomly generated password that follows user specifications
// Input : Number
// Return : String
function createPassword(passwordLength) {

    //User specified character types
    let includeUpperCase = false;
    let includeLowerCase = false;
    let includeSpecialChar = false;
    let includeNumericChar = false;

    //String of user desired characters for password generation
    let validChars = "";

    //Return value
    let password = "";

    //Checks for at least one character type selection from user
    while (!(includeNumericChar || includeSpecialChar || includeLowerCase || includeUpperCase)) {

        alert("Choose at least one of the four following character types for password generation");

        includeUpperCase = confirm("Does you password need upper case letters?");
        includeLowerCase = confirm("Does your password need lower case letters?");
        includeSpecialChar = confirm("Does your password need special characters?");
        includeNumericChar = confirm("Does your password need to contain numbers?");
    }

    //Valid character set formation
    if (includeUpperCase) { validChars += UPPERCASE; }
    if (includeLowerCase) { validChars += LOWERCASE; }
    if (includeSpecialChar) { validChars += SPECIAL_CHARS; }
    if (includeNumericChar) { validChars += NUMERIC_CHARS; }

    //Finds length of valid char set for random character selection
    let validCharsLength = validChars.length;

    //Password formation
    for (x = 0; x < passwordLength; x++) {

        let i = Math.floor(Math.random() * (validCharsLength - 1))
        password += validChars[i];
    }

    return password;
}

//Gets reference to button with id=generate
var generateBtn = document.querySelector("#generate");

//Calls generatePassword() when generate button is clicked
generateBtn.addEventListener("click", generatePassword);