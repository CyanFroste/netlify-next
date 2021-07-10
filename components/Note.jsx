import styles from "../styles/Note.module.css";

export default function Note({ title, body }) {
  return (
    <div className={styles.note}>
      {title && <div className={styles.title}>{title}</div>}
      {body && <div className={styles.body}>{body}</div>}
    </div>
  );
}
