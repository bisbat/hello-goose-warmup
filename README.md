# hello-goose-warmup
Problem:
You are working on a project that involves handling data for books. Each book is represented by an object with the following structure:
```ts
type Book = {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  rating: number;
};
```
Write a TypeScript function called getBookSummary that takes a Book object as a parameter and returns a summary string. The summary should include the title, author, and genre of the book.

Example:
```ts
const book: Book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publicationYear: 1979,
  genre: "Science Fiction",
  rating: 4.5,
};

const summary = getBookSummary(book);
console.log(summary);
// Output: "Book: The Hitchhiker's Guide to the Galaxy by Douglas Adams. Genre: Science Fiction."
```
Your task is to use object destructuring within the getBookSummary function to extract the necessary properties from the Book object and construct the summary string.
