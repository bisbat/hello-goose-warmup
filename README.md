# hello-goose-warmup
Problem:
You are working on a project that involves handling data for books. Each book is represented by an object with the following structure:
```ts
type Book = {
    title: {
      mainTitle: string;
      description: string;
    };
    author: {
      firstName: string;
      lastName: string;
      birthDetails: {
        age: string;
      };
      residence: {
        country: {
          city: string;
        };
      };
    };
    publicationYear: number;
    genre: string;
    rating: number;
  };
};
```
Write a TypeScript function called getBookSummary that takes a Book object as a parameter and returns a summary string. The summary should include the title, author, and genre of the book.

Example:
```ts
  const exampleBook: Book = {
    title: {
      mainTitle: "The Hitchhiker's Guide to the Galaxy",
      description: "A comedic science fiction series.",
    },
    author: {
      firstName: "Douglas",
      lastName: "Adams",
      birthDetails: {
        age: "42",
      },
      residence: {
        country: {
          city: "London",
        },
      },
    },
    publicationYear: 1979,
    genre: "Science Fiction",
    rating: 4.5,
  };
  
  const summary = getBookSummary(exampleBook);
  console.log(summary);
  // Output: 
  //"Book: The Hitchhiker's Guide to the Galaxy by Douglas Adams. 
  // Author: He 42 years old now and he live in London city. 
  // Genre: Science Fiction. Rating : 4.5"
```
Your task is to use object destructuring within the getBookSummary function to extract the necessary properties from the Book object and construct the summary string.
