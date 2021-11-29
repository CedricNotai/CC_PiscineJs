function twoNumberSum(array, targetSum){
    let sum;
    let result = [];
    for (i=0; i < array.length; i++) {
        for (j=0; j < array.length -i; j++ ) {
                sum=array[i]+array[i+j];
                if (sum == targetSum && i!=i+j) {
                    result.push([array[i],array[i+j]]);
                }
        }
    }
    return result;
}

// Merci de ne pas effacer la ligne en dessous.
exports.twoNumberSum =  twoNumberSum;