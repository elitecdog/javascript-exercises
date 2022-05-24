const sumAll = function(int, int2) {
    let sum=0;
    if(typeof int !=="number" || typeof int2 !=="number") {
        return "ERROR";
    }
    else if(int<0 || int2 <0) {
        return "ERROR";
    }
    else if(int<int2) {
    for(let i=int; i<=int2; i++) {
        sum+=i;
    }
    return sum;
}
    else if(int>int2) {
        for(let i=int2; i<=int; i++) {
            sum+=i;
    }
        return sum;
}
    else {
        let sum= int;
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
