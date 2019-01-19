let far = 32; // 0c  - 273.15k
// calculate to celsius
// formula = (far - 32) * 5/9

// calculate to kelvin
// formula = far + 273.15

let celsius = (far - 32) * (5 / 9);
let kelvin = (far + 459.67) * (5 / 9);

console.log(`${far} farenheit is ${celsius} celsius and ${kelvin} kelvin`);
