function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('');
    if (string == reversedString) {
        return true;
    } else{
        return false;
    }
}

console.log(isPalindrome("kayak"));

// Merci de ne pas effacer la ligne en dessous.
exports.isPalindrome =  isPalindrome;