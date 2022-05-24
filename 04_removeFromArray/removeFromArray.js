const removeFromArray = function(arr) {
    let arr2 = arr;
    for(let i=0; i<arr2.length; i++) {
        for(let j=1; j<arguments.length; j++){
        if(arr2[i] === arguments[j]) {
            arr2.splice(i, 1);
            i--;
        }
    }
}
    return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
