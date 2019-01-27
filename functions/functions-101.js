// function - input, code, output

let greetUser = function() {
  console.log("welcome user");
};

greetUser();
greetUser();
greetUser();

let square = function(number) {
  return number * number;
};

let value = square(2);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

// challenge

let convertFahrenheitToCelsius = fahrenheit => {
  return (fahrenheit - 32) * (5 / 9);
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
