// app/collection/page.js
export default async function CollectionPage() {
    // Fetch data from json-server
    const res = await fetch("http://localhost:4000/books");
    const books = await res.json();
  
    return (
      <div>
        <h1>Book Collection</h1>
        {books.map((book) => (
          <div key={book.id} style={{ marginBottom: "1rem" }}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    );
  }
  