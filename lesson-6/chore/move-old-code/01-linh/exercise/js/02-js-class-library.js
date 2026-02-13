class Library {
  constructor(name, location, books) {
    this.name = name;
    this.location = location;
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  findBook(title) {
    return this.books.find((b) => b.title === title);
  }
}

const library = new Library("Library 1", "123 Main St", [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
]);

library.addBook({ id: 3, title: "Book 3", author: "Author 3" });
console.log(library.findBook("Book 1"));
console.log(library.findBook("Book 4"));
