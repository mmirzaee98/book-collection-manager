// components/AdminTable.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminTable({ initialBooks }) {
  const [books, setBooks] = useState(initialBooks);
  const router = useRouter();

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the deleted book from state so the UI updates
        setBooks((prev) => prev.filter((book) => book.id !== id));
      } else {
        console.error("Delete failed", response.status);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>Title</th>
          <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>Author</th>
          <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>Year</th>
          <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>Delete</th>
          <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>Edit</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{book.title}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{book.author}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{book.publicationYear}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
              <button onClick={() => handleDelete(book.id)} style={{ backgroundColor: "#ff4d4d", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px", cursor: "pointer" }}>
                Delete
              </button>
            </td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
              <a href={`/admin/edit/${book.id}`} style={{ color: "#0070f3", textDecoration: "none" }}>Edit</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
