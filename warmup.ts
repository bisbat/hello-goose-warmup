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
  
  function getBookSummary(book: Book): string {
    const {
      title: { mainTitle },
      author: { firstName, lastName,birthDetails:{age},residence:{country:{city}} },
      genre,
    } = book;
  
    return `Book: ${mainTitle} by ${firstName} ${lastName}. 
    Author: He ${age} years old now and he  live in ${city} city.
    Genre: ${genre}.`;
}
  
  // Example usage
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
  