const reverseString = function(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;

};

const string = "hello";
const newString = reverseString(string);
console.log(newString);

/*
Alternatively, a more streamlined version would be:

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

*/

// Do not edit below this line
module.exports = reverseString;
