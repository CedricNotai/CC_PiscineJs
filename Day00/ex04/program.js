function levDist(str1, str2){
    let diffCount=0;
    
    if (str1.length < str2.length) {
        strToModify = str2;
        strToCopy = str1;
    } else {
        strToModify = str1;
        strToModify = str2;
    }

    for (let i=0;i <= strToModify.length; i++) {
        let character = strToCopy.charAt(i);
        for (let j=0; j <= strToModify.length; j++) {
            if (character != strToModify.charAt(i)) {
                console.log(character);
                diffCount++;
                break;
            }
        }
    }
    return diffCount;
  };

 
// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;