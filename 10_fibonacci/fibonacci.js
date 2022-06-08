
function fibonacci(input) {
    if(input<0) {
        return "OOPS";
    }
    let arr = [1,1];
    let fib1=1;
    let fib2=1;
    for(let i =2; i<input; i++) {
        arr.push(fib1+fib2);
        let temp = fib1;
        fib1= fib2+fib1;
        fib2=temp;
    }
    return arr[input-1];
    /*if (input==1 || input ==2) {
        return 1;
    }
    else if(input<0) {
        return "OOPS";
    }
    let prev = 1;
    let prev2 = 1;
    let temp=0;
    for(let i=2; i<input; i++) {
        let temp = prev;
        let prev = prev + prev2;
        let prev2 = temp;
    }
    return prev;

    */
};

// Do not edit below this line
module.exports = fibonacci;
