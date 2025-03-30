import { redirect } from "next/navigation";

// Server action that handles the POST request
export async function createBook(formData) {
  "use server";
  
  const id = formData.get("id");
  const title = formData.get("title");
  const author = formData.get("author");
  const publicationYear = Number(formData.get("publicationYear"));

  await fetch("http://localhost:4000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, title, author, publicationYear })
  });

  redirect("/admin");
}

export default function CreatePage() {
  return (
    <div>
      <h1>Create Book</h1>
      <form action={createBook}>
        <input type="text" name="id" placeholder="Book ID" required />
        <input type="text" name="title" placeholder="Book Title" required />
        <input type="text" name="author" placeholder="Author" required />
        <input type="number" name="publicationYear" placeholder="Publication Year" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
