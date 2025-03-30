// app/admin/page.js
import Link from "next/link";

export default async function AdminPage() {
  const res = await fetch("http://localhost:4000/books");
  const books = await res.json();

  return (
    <div className="adminContainer">
      <div className="adminHeader">
        <h1>Admin Dashboard</h1>
        <Link href="/admin/create" className="createButton">Create New Book</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>
                <button>Delete</button>
              </td>
              <td>
                <Link href={`/admin/edit/${book.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
