let array = [ 1, 2, 3, 4, 5, 6];

function tabTriCarre(array){
    for (let i=0; i < array.length; i++) {
        array[i] = Math.pow(array[i],2);
        // array[i] = array[i]*array[i];
    }
    return array.sort(function(a,b){
        return a - b;
    });
}

console.log(tabTriCarre(array));
    
// Merci de ne pas effacer la ligne en dessous.
//exports.tabTriCarre =  tabTriCarre;
