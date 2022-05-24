const leapYears = function(year) {
    let centuryTest = year%100;
    let test400 = year%400;
    let normalTest = year%4;
    if(test400 == 0) {
        return true;
    }
    else if(centuryTest == 0) {
        return false;
    }
    else if(normalTest == 0) {
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
