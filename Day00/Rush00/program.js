function sun(buildings, direction){
    let results = [];

    if (direction.toLowerCase() == "ouest") {
        results.push(0);
        for (let i=1; i < buildings.length-i; i++) {
            if (buildings[i] > buildings[i-1]) {
                results.push(i);
            }
        }
    }

    if (direction.toLowerCase() == "est") {
        results.push(buildings.length-1);
        for (let i=0; i < buildings.length-1; i++) {
            if (buildings[i] > buildings[i-1]) {
                results.push(i);
            }
        }
    }

    return results.sort(function(a,b){
        return a - b;
    });
}

// Merci de ne pas effacer la ligne en dessous.
exports.sun = sun ;