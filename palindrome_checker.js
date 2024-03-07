function palindrome(str) {

	//Trims the edges of the string, converts it to lower case, and replaces any whitespace or underscores with nothing
  let newStr = str.trim().toLowerCase().replace(/[\W_]+/g,"");

	//Splits every character of the string into an array, reverses the order of said characters, and joins them back into a string
  let reverseStr = newStr.split("").reverse().join("");

	//Checks to see if str is a palindrome by returning true if newStr is the same as reverseStr, and returning false if not
  if (newStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("_eye"));