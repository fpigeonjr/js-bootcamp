let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 325
};

let otherBook = {
  title: "Clean Code",
  author: "Tyler Otwell",
  pageCount: 221
};

let getSummary = book => {
  return {
    summary: `${book.title} is written by ${book.author}`,
    pageCountSummary: `${book.title} has ${book.pageCount} pages.`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// challenge
// create function  - take farenheit in - return object with all three

let far = 32;

let fahrenheitConverter = far => {
  return {
    fahrenheit: far,
    celsius: (far - 32) * (5 / 9),
    kelvin: (far + 459.67) * (5 / 9)
  };
};

let myTemp = fahrenheitConverter(far);
console.log(
  `${myTemp.fahrenheit} fahrenheit is ${myTemp.celsius} celsius or ${
    myTemp.kelvin
  } kelvin`
);
