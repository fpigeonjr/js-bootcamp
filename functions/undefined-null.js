// undefined for variable

let name = "Frank";

if (name === undefined) {
  console.log("sorry bro, you need a name");
} else {
  console.log(name);
}

// undefined for function arguments
// undefined for function return value

let square = num => {
  return num * num;
};

let result = square();

console.log(result);

// null as assigned value

let age = 24;

age = null;

console.log(age);
