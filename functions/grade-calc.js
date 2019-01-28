// challenge
// arguments: students score, total possible score
// return:  letter grade 15 /20 -> 75%
// message: You got a C (75%)

let scoreCalculator = (score, total) => {
  let gradePercent = (score / total) * 100;
  let gradeLetter = "";

  switch (true) {
    case gradePercent >= 90 && gradePercent <= 100:
      gradeLetter = "A";
      break;
    case gradePercent >= 80 && gradePercent <= 89:
      gradeLetter = "B";
      break;
    case gradePercent >= 70 && gradePercent <= 79:
      gradeLetter = "C";
      break;
    case gradePercent >= 60 && gradePercent <= 69:
      gradeLetter = "D";
      break;
    default:
      gradeLetter = "F";
      break;
  }

  return `You got a ${gradeLetter} (${gradePercent})%`;
};

console.log(scoreCalculator(20, 20));
console.log(scoreCalculator(90, 100));
console.log(scoreCalculator(85, 100));
console.log(scoreCalculator(75, 100));
console.log(scoreCalculator(66, 100));
console.log(scoreCalculator(20, 100));
