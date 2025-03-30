"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBookForm({ book }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publicationYear, setPublicationYear] = useState(book.publicationYear);
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  // Define the handleSubmit function
  async function handleSubmit(e) {
    e.preventDefault();

    // Example validation
    if (title.length < 3) {
      setErrors(["Title must be at least 3 characters."]);
      return;
    }

    // PUT request to update the book
    await fetch(`http://localhost:4000/books/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: book.id,
        title,
        author,
        publicationYear,
      }),
    });
    router.push("/admin");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* If you have errors, display them */}
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
      )}

      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Author</label>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label>Publication Year</label>
      <input
        type="number"
        value={publicationYear}
        onChange={(e) => setPublicationYear(Number(e.target.value))}
      />

      <button type="submit">Update Book</button>
    </form>
  );
}
