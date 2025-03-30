// app/admin/AdminTable.jsx
"use client";
import { useState } from "react";

export default function AdminTable({ initialBooks }) {
  const [books, setBooks] = useState(initialBooks);

  async function handleDelete(id) {
    await fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" });
    // Filter out the deleted book from local state so the UI updates
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Delete</th>
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
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
