function levDist(str1, str2){
    if (!str1.length) {
            return str2.length;
        }

        if (!str2.length) {
            return str1.length;
        }

    let result = [];

    for (let i = 0; i <= str2.length; i++) {
        result[i] = [i];
        for (let j = 1; j <= str1.length; j++) {
            if (i === 0) {
                result[i][j] =j;
            } else {
                result[i][j] =Math.min(
                    result[i - 1][j] + 1,
                    result[i][j - 1] + 1,
                    result[i - 1][j - 1] + (str1[j - 1] === str2[i - 1] ? 0 : 1)
                );
            }
        }
    }
    return result[str2.length][str1.length];
};

// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;