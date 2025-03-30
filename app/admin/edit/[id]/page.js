// app/admin/edit/[id]/page.js
import EditBookForm from "./EditBookForm";

export default async function EditBookPage({ params }) {
  const res = await fetch(`http://localhost:4000/books/${params.id}`);
  if (!res.ok) {
    return <div>Book not found.</div>;
  }
  const book = await res.json();

  return (
    <div>
      <h1>Edit Book</h1>
      <EditBookForm book={book} />
    </div>
  );
}
