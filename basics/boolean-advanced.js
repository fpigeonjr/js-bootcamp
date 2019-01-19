isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
  console.log("account is locked");
} else if (userRole === "admin") {
  console.log("welcome admin");
} else {
  console.log("welcome");
}

// challenge

let temp = 110;
const isFreezing = temp <= 32;
const isBurning = temp >= 100;

if (isFreezing) {
  console.log("take a jacket");
} else if (isBurning) {
  console.log("it is too hot");
} else {
  console.log("go for it. its pretty nice!");
}
