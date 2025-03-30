// app/admin/create/page.js
import { redirect } from "next/navigation";

export async function createBook(formData) {
  "use server";

  // 1. Extract the form fields
  const id = formData.get("id");
  const title = formData.get("title");
  const author = formData.get("author");
  const publicationYear = Number(formData.get("publicationYear"));

  // 2. Send a POST request to json-server
  await fetch("http://localhost:4000/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      title,
      author,
      publicationYear
    })
  });

  // 3. Redirect to /admin (or wherever you want after creation)
  redirect("/admin");
}

export default async function CreatePage() {
  // If you also want to display existing books in a table:
  const res = await fetch("http://localhost:4000/books");
  const books = await res.json();

  return (
    <div>
      <h1>Create New Book</h1>
      <form action={createBook}>
        <label>
          ID:
          <input type="text" name="id" placeholder="Book ID" />
        </label>
        <label>
          Title:
          <input type="text" name="title" placeholder="Book Title" />
        </label>
        <label>
          Author:
          <input type="text" name="author" placeholder="Author" />
        </label>
        <label>
          Publication Year:
          <input type="number" name="publicationYear" placeholder="Publication Year" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Current Books</h2>
      {/* If you have an AdminTable, pass the books here */}
      {/* <AdminTable books={books} /> */}
    </div>
  );
}
