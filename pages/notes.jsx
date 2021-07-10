import Head from "next/head";
import { useEffect, useState } from "react";
import { uuid } from "../util/uuid";
import styles from "../styles/Notes.module.css";
import Note from "../components/Note";

export default function Notes() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (!noteTitle && !noteBody) return;
    setNotes([
      ...notes,
      {
        id: uuid(),
        title: noteTitle,
        body: noteBody,
      },
    ]);
  }

  return (
    <div className="container">
      <Head>
        <title>Notify</title>
        <meta name="description" content="Just a Note taking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.addNote}>
          <span // using div, <br> gets added to the empty div
            contentEditable
            className={styles.noteTitleInput}
            onInput={(e) => setNoteTitle(e.target.innerText)}
            placeholder="Title"
          />
          <span
            contentEditable
            className={styles.noteBodyInput}
            onInput={(e) => {
              setNoteBody(e.target.innerText);
            }}
            placeholder="anything goes..."
          />
          <button className={styles.addNoteBtn} onClick={addNote}>
            Add Note
          </button>
        </div>
        <div className={styles.sectionTitle}>
          Notes
          <span>( {notes.length} )</span>
        </div>
        <div className={styles.notesContainer}>
          {notes.length ? (
            <div className={styles.notes}>
              {notes.map((note) => (
                <Note key={note.id} title={note.title} body={note.body} />
              ))}
            </div>
          ) : (
            <div className={styles.notesPlaceholder}>
              {"You don't have any Notes..."}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
