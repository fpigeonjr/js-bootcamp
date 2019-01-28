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
