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

let bill = 100.99;
let tipPercent = 0.3;
let myTip = tipCalculator(bill, tipPercent);

console.log(`A ${tipPercent * 100}% tip on $${bill} would be $${myTip}`);

let name = "Frank";
let age = 40;
console.log(`Hello my name is ${name} and I am ${age} years old.`);
