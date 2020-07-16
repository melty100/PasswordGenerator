
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numericChar = "1234567890";

function gp() {

    alert("called generate password function");
    var includeUpperCase = false;
    var includeLowerCase = false;
    var includeSpecialChar = false;
    var includeNumeric = false;
    var length = 0;

    length = getLength();
    includeUpperCase = confirm("Does you password need upper case letters?");
    includeLowerCase = confirm("Does your password need lower case letters?");
    includeSpecialChar = confirm("Does your passowrd need special characters?");
    includeNumeric = confirm("Does your password need to contain numbers?");

    var password = createPassword(includeUpperCase, includeLowerCase, includeSpecialChar, includeNumeric, length);

    document.getElementById("password-field").innerHTML = password;

}

function getLength() {

    var length = parseInt(prompt("Enter a number between 8 and 128 for password length."));

    while (isNaN(length) || (length < 8 || length > 128)) {

        length = parseInt(prompt("Invalid Input Error - Enter a number between 8 and 128 for password length."));
    }

    return length;
}

function createPassword(upper, lower, special, numeric, passwordLength) {

    var validChars = "";
    var password = "";

    if(upper){
        validChars += upperCase;
    }
    if(lower){
        validChars += lowerCase;
    }
    if(special){
        validChars += specialChar;
    }
    if(numeric){
        validChars += numericChar;
    }

    console.log(validChars);

    var validCharsLength = validChars.length;

    for(x = 0; x < passwordLength; x++){

        //Reports randomly generated index to console for testing
        let index = Math.floor(Math.random() * (validCharsLength - 1))

        console.log(index);

        password += validChars[index];
    }

    console.log(password);
    return password;
}
