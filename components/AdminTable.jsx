// components/AdminTable.jsx
"use client";  // This must be the very first line

import { useState } from "react";

export default function AdminTable({ books }) {
  // Now you can safely use onClick in this component
  async function deleteBook(id) {
    await fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" });
    // Update state or re-fetch to refresh the UI
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
