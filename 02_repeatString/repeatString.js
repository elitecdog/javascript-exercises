const repeatString = function(string, num) {
    if(num<0) {
        return 'ERROR';
    }
    let stringFinal = "";
    for(let i=0; i<num; i++) {
        stringFinal+= string;
    }
    return stringFinal;
};

// Do not edit below this line
module.exports = repeatString;
