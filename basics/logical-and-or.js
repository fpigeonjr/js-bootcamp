let temp = 44;

if (temp >= 60 && temp <= 90) {
  console.log("it is really nice outside");
} else if (temp <= 0 || temp > 100) {
  console.log(`stay inside! You will die`);
} else {
  console.log("whatevs");
}

// challenge
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("only offer vegan options");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("offer some vegan options");
} else {
  console.log("offer anything on the menu");
}
