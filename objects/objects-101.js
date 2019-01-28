let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 325
};

console.log(
  `${myBook.title} is written by ${myBook.author} and has ${
    myBook.pageCount
  } pages.`
);

myBook.title = "Brave New World";

console.log(
  `${myBook.title} is written by ${myBook.author} and has ${
    myBook.pageCount
  } pages.`
);

// challenge

// name, age, location

let person = {
  name: "Frank",
  age: 40,
  location: "San Antonio"
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age += 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
