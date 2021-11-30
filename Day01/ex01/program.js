function firstDuplicateValue(array){
    for (let i=0; i<array.length; i++) {
        if (array[i] <= 0) {
           return window.alert('Le tableau doit contenir uniquement des entiers strictement positifs !'); 
        } else if(array.indexOf(array[i], i+1) != -1) {
            return array[i];
        } 
    }
    return -1;
}

// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue =  firstDuplicateValue;
