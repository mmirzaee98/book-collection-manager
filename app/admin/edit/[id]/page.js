// app/admin/edit/[id]/page.js
import styles from "./page.module.css";
import EditBookForm from "./EditBookForm";

export default async function EditBookPage({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/books/${id}`);
  if (!res.ok) {
    return <div>Book with ID {id} not found.</div>;
  }
  const book = await res.json();

  return (
    <div className={styles.editContainer}>
      <h1>Edit Book</h1>
      <EditBookForm book={book} />
    </div>
  );
}
