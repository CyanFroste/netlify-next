import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/author")
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Notify</title>
        <meta name="description" content="Just a Note taking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        <Image
          src="/assets/banner.jpg"
          alt="notify's landing page banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="container">
        <div className={styles.content}>
          <Link href="/notes">
            <a className={styles.link}>Take some Notes</a>
          </Link>
          {author && (
            <a
              className={styles.author}
              href={author.git}
              rel="noreferrer"
              target="_blank"
            >
              Check out {author.name} on Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
