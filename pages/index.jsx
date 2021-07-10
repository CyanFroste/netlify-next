import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Notify</title>
        <meta name="description" content="Just a Note taking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/assets/banner.jpg"
          alt="notify's landing page banner"
          layout="fill"
          objectFit="cover"
        />
      </main>
    </div>
  );
}
