// app/admin/create/page.js
import AdminTable from "../../../components/AdminTable";
import { redirect } from "next/navigation";

export async function createBook(formData) {
  "use server";
  // ... code to POST a new book ...
  redirect("/admin");
}

export default async function CreatePage() {
  // 1. Fetch books from JSON server
  const res = await fetch("http://localhost:4000/books");
  const books = await res.json();

  // 2. Pass books as a prop to AdminTable
  return (
    <div>
      <h1>Create New Book</h1>
      <form action={createBook}>
        <input name="title" placeholder="Book Title" />
        <button type="submit">Submit</button>
      </form>
      <h2>Current Books</h2>
      <AdminTable books={books} />
    </div>
  );
}
