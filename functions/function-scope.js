// global(convertFahrenheitToCelsius)
// local(fahrenheit, celsius)
// local(isFreezing)

let convertFahrenheitToCelsius = fahrenheit => {
  let celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
