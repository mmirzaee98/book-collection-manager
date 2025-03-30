// Example: app/collection/[id]/page.js

import BookDetail from "../../components/BookDetail"; // adjust path if needed

export default async function BookDetailPage({ params }) {
  const res = await fetch(`http://localhost:4000/books/${params.id}`);
  if (!res.ok) {
    return <div>Book not found.</div>;
  }
  const book = await res.json();

  return (
    <div>
      <a href="/collection">Back</a>
      <h1>Book Details</h1>
      <BookDetail book={book} />
    </div>
  );
}
