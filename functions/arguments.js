// multiple arguments
let add = (a, b, c) => {
  return a + b + c;
};

let result = add(1, 1, 1);
console.log(result);

// default arguments
let getScoreText = (name = "Noob", score = 0) => {
  return `Hello ${name}. Your score is ${score}.`;
};

let myScore = getScoreText("Frank", 199);
let noobScore = getScoreText();

console.log(myScore);
console.log(noobScore);

// challenge: tip calculator

let tipCalculator = (bill, tipPercent = 0.2) => {
  return bill * tipPercent;
};

let defaultTip = tipCalculator(100);
let cheapTip = tipCalculator(20, 0.10);

console.log(defaultTip);
console.log(cheapTip);
