const convertToCelsius = function(Temp_F) {
  const stringNumber = ((Temp_F - 32) / 1.8).toFixed(1);
  return Number(stringNumber)
};

const convertToFahrenheit = function(Temp_C) {
  const stringNumber = ((Temp_C * 1.8) + 32).toFixed(1);
  return Number(stringNumber)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
