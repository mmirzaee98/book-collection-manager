// app/admin/edit/[id]/EditBookForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBookForm({ book }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publicationYear, setPublicationYear] = useState(book.publicationYear);
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  const validate = () => {
    const errs = [];
    if (title.length < 3 || title.length > 50) {
      errs.push("Title must be between 3 and 50 characters.");
    }
    if (author.length < 3 || author.length > 50) {
      errs.push("Author must be between 3 and 50 characters.");
    }
    if (publicationYear < 1500 || publicationYear > new Date().getFullYear()) {
      errs.push("Publication year must be valid.");
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    // If valid, send PUT request to update the book
    const response = await fetch(`http://localhost:4000/books/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: book.id, // usually the id stays the same
        title,
        author,
        publicationYear,
      })
    });
    if (response.ok) {
      router.push("/admin");
    } else {
      setErrors(["Failed to update the book."]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((err, idx) => <li key={idx}>{err}</li>)}
        </ul>
      )}
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Publication Year:</label>
        <input
          type="number"
          value={publicationYear}
          onChange={(e) => setPublicationYear(Number(e.target.value))}
        />
      </div>
      <button type="submit">Update Book</button>
    </form>
  );
}
