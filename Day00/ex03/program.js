function firstNonRepeatingCharacter(string) {
    for (let i=0; i<string.length; i++) {
        let character = string.charAt(i);
        if (string.indexOf(character) == i && string.indexOf(character, i +1) == -1) {
            return i;
        }
    }
    return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;