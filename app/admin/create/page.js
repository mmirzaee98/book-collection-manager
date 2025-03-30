import { redirect } from "next/navigation";
import styles from "./page.module.css";

export async function createBook(formData) {
  "use server";
  const title = formData.get("title");
  // ... POST request to json-server or handle the data ...
  redirect("/admin");
}

export default function CreatePage() {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Create Book</h1>
      <form action={createBook}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
