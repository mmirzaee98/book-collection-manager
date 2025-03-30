// app/admin/page.js
import AdminTable from "../../components/AdminTable"; // Correct path

export default async function AdminPage() {
  const res = await fetch("http://localhost:4000/books");
  const books = await res.json();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminTable books={books} />
    </div>
  );
}
