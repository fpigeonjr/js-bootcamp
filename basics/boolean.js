let temp = 119;
let isFreezing = temp < 32;
let isBurning = temp >= 110;

if (isFreezing) {
  console.log(`❄️ bro, its frosty`);
}

if (isBurning) {
  console.log("🔥 bro, better stay inside");
}

// challenge
const child = 7;
const senior = 65;
let age = 6;

isChild = age <= child;
isSenior = age >= senior;

console.log(`you are ${age}`);

if (isChild) {
  console.log(`child: ${isChild}:-discount applied!`);
} else if (isSenior) {
  console.log(`senior: ${isSenior}-discount applied!`);
} else {
  console.log(`you pay full price`);
}
