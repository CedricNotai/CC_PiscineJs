function threeLargestNumbers(array){
    array.sort(function(a,b){
        return a - b;
    });
    return array.slice(-3);
}


// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;