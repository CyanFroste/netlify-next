import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Notify</title>
        <meta name="description" content="Just a Note taking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/notes">
          <a>Notes</a>
        </Link>
      </main>
    </div>
  );
}
