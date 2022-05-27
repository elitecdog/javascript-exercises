const palindromes = function (input) {
    let justLetters = input.replace(/[^0-9a-zA-Z]/g, ''); //Removes non alphanumeric characters
    justLetters = justLetters.replace(/ /g,'');  //Removes whitespace
    justLetters = justLetters.toLowerCase();  // Makes all the letters lowercase
    let count=0;
    lengthMinus = justLetters.length-1; //What value on the other end of the string to start at
    let stopPoint = Math.floor((justLetters.length/2));  //The stop point of our for loop.
    for(let i=0; i<stopPoint; i++) {
            if(justLetters.charAt(i) == justLetters.charAt(lengthMinus)){ //Checks if characters match.
                count+=1;
                lengthMinus--;
            }
    }
    if(count == stopPoint) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
