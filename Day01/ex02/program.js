function pocketMoney(coins){
    let sum=0;
    let smallestCoin;
    let biggestCoin;
    let result=0;
    let coinsCopy = coins.slice();

    coinsCopy.sort(function(a,b){
        return a - b;
    });

    smallestCoin = coinsCopy[0];
    biggestCoin = coinsCopy[coinsCopy.length-1];
    coinsCopy.pop();

    for (let i=0; i<coinsCopy.length; i++) {
        sum += coinsCopy[i];
    }

    if (coins.length <= 1) {
        result= coins[0]+1;
    } if (sum < biggestCoin) {
        if (sum+1 == biggestCoin) {
            result = biggestCoin+sum+1;
        } else {
            result = sum+smallestCoin;
        }
    } else {
        result = biggestCoin+sum+1;
    }
    
    return result;
}
  
// Merci de ne pas effacer la ligne en dessous.
exports.pocketMoney =  pocketMoney;