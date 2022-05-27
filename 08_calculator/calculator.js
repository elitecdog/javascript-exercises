const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let total=0;
  for(let i=0; i<arr.length; i++){
    total+= arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total= 1;
  for(let i=0; i<arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(base, power) {
	return Math.pow(base,power);
};

const factorial = function(input) {
	let total = 1;
  let counter = input;
  for(let i=0; i<input; i++) {
    total*=counter;
    counter--; 
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
