// components/AdminTable.jsx (client or server depending on your approach)
"use client"; // If you want to handle onClick delete

import Link from "next/link";

export default function AdminTable({ books = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>
              <button>Delete</button>
            </td>
            <td>
              <Link href={`/admin/edit/${book.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
