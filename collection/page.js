// app/collection/page.js
export default async function CollectionPage() {
    // 1. Fetch all books
    const res = await fetch("http://localhost:4000/books");
    if (!res.ok) {
      return <div>Error fetching books</div>;
    }
    const books = await res.json();
  
    // 2. Display a styled list (NOT a table, as per project instructions)
    return (
      <div>
        <h1>Book Collection</h1>
        {books.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
            <p>ID: {book.id}</p>
            <p>Title: {book.title}</p>
            <a href={`/collection/${book.id}`}>more</a>
          </div>
        ))}
      </div>
    );
  }
  