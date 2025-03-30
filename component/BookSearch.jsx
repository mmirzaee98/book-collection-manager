// components/BookDetail.jsx

export default function BookDetail({ book }) {
    return (
      <div style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        maxWidth: "300px",
        margin: "1rem auto"
      }}>
        <p><strong>ID:</strong> {book.id}</p>
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Author:</strong> {book.author}</p>
      </div>
    );
  }
  