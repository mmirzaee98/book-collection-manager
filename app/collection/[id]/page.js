// app/collection/[id]/page.js

// Fetch data and statically generate paths for the first 10 items
export async function generateStaticParams() {
    const res = await fetch("http://localhost:4000/books");
    const books = await res.json();
    
    // Return an array of params objects for the first 10 books
    return books.slice(0, 10).map((book) => ({
      id: book.id.toString(),
    }));
  }
  
  export default async function BookDetailPage({ params }) {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/books/${id}`);
    
    if (!res.ok) {
      return <div>No book found with ID {id}</div>;
    }
    
    const book = await res.json();
  
    return (
      <div>
        <a href="/collection">Back</a>
        <h1>Book Details</h1>
        <table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{book.id}</td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td>Author:</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <td>Publication Year:</td>
              <td>{book.publicationYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  