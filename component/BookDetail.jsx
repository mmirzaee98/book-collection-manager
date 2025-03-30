"use client";

import { useState } from "react";

export default function BookSearch() {
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:4000/books/${bookId}`);
      if (!res.ok) {
        throw new Error("Book not found");
      }
      const data = await res.json();
      setBook(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setBook(null);
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <form onSubmit={handleSearch} style={{ display: "flex", flexDirection: "column" }}>
        <label>
          Enter Book ID:
          <input 
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            style={{ padding: "0.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}
            required
          />
        </label>
        <button type="submit" style={{ padding: "0.5rem", cursor: "pointer" }}>Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {book && (
        <div style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginTop: "1rem"
        }}>
          <p><strong>ID:</strong> {book.id}</p>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
        </div>
      )}
    </div>
  );
}
