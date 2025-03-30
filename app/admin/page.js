// app/admin/page.js
import Link from "next/link";

export default async function AdminPage() {
  const res = await fetch("http://localhost:4000/books");
  const books = await res.json();

  // Function defined as a server action to handle deletion
  async function deleteBook(id) {
    await fetch(`http://localhost:4000/books/${id}`, {
      method: "DELETE",
    });
    // After deletion, you might trigger on-demand revalidation if needed
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href="/admin/create">Create New</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Year</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publicationYear}</td>
              <td>
                {/* Delete button */}
                <button onClick={async () => {
                  await deleteBook(book.id);
                  // Optionally refresh the page or trigger revalidation
                  window.location.reload();
                }}>D</button>
              </td>
              <td>
                {/* Edit button */}
                <Link href={`/admin/edit/${book.id}`}>E</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
