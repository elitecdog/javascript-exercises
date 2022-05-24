const ftoc = function(input) {
  let multiplier = 5/9;
  let preMulti = input-32;
  let celcius = preMulti * multiplier;
  let output = Math.round(celcius*10)/10;
  return output;
};

const ctof = function(input) {
  let multiplier = 9/5;
  let postMulti = input * multiplier;
  let preFinal = postMulti +32;
  let output = Math.round(preFinal*10)/10;
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
