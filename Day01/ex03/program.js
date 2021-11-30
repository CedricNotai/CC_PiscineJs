let string = 'AAAAAAAAAAAAAB BCCCCDD';

function runLengthEncoding(string) {
    let count=0;
    let result="";

    let char=string[0];

    for (let i=0; i<=string.length; i++) {
        if (string[i] == char && count < 9) {
            count++;
        } else {
            result += count + char;
            char=string[i];
            count=1;
        }
    }

    return result;
}


console.log(runLengthEncoding(string));

// Merci de ne pas effacer la ligne en dessous.
//exports.runLengthEncoding = runLengthEncoding;