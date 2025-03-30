// app/admin/page.js
import AdminTable from "../../components/AdminTable";
import Link from "next/link";

export default async function AdminPage() {
  const res = await fetch("http://localhost:4000/books");
  const books = await res.json();

  return (
    <div style={{ width: "80%", margin: "2rem auto", backgroundColor: "#fff", padding: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Dashboard</h1>
        <Link href="/admin/create" style={{ backgroundColor: "#0070f3", color: "#fff", padding: "0.5rem 1rem", textDecoration: "none", borderRadius: "4px" }}>
          Create New Book
        </Link>
      </div>
      <AdminTable initialBooks={books} />
    </div>
  );
}
