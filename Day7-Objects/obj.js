//Activity 1 - Object creation and Access
//Task 1
const book = {
  title: "The giver",
  author: "Lois lowry",
  year: 1993,
};
console.log(book);

//Task 2
console.log(book.title, book["author"]);

// Activity 2 - Object Methods
//Task 3
const newbook = {
  title: "The giver",
  author: "Lois lowry",
  year: 1993,
  getinfo: function () {
    return this.title + "  " + this.author;
  },
  updateYear: function (yr) {
    //Task 4
    console.log("published year updated");
    return (this.year = yr);
  },
};
console.log(newbook.getinfo());
console.log(newbook.updateYear(2000));
console.log(newbook);

// Activity 3 - Nested Objects
//Task 5
const library = {
  name: "MyLibrary",
  books: [
    {
      title: "Scope and Closures You don't know JS",
      author: "Kyle Simpson",
      year: 1883,
    },
    {
      title: "The giver",
      author: "Lois lowry",
      year: 1993,
    },
    {
      title: " Make you own luck",
      author: "Bob Miglani",
      year: 1789,
    },
  ],
};
console.log(library);
//Task 6
console.log("Name of the Library: ", library.name);

library.books.forEach((book) => {
  console.log("Title of the book: ", book.title);
});

// Activity 4 - The 'THIS' keyword
//Task 7
const newLibrary = {
  name: "MyLibrary",
  books: [
    {
      title: "Scope and Closures You don't know JS",
      author: "Kyle Simpson",
      year: 1883,
      getdetails: function () {
        return this.title + "  " + this.year;
      },
    },
    {
      title: "The giver",
      author: "Lois lowry",
      year: 1993,
      getdetails: function () {
        return this.title + "  " + this.year;
      },
    },
    {
      title: " Make you own luck",
      author: "Bob Miglani",
      year: 1789,
      getdetails: function () {
        return this.title + "  " + this.year;
      },
    },
  ],
};

newLibrary.books.forEach((book) => {
  console.log(book.getdetails());
});

//Activity 5 - Object Iteration
//Task 8
for (let x in book) {
  console.log(x, " : ", book[x]);
}

//Task 9
console.log(Object.keys(book));
console.log(Object.values(book));
