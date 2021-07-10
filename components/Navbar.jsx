import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import AuthContext from "../stores/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { user, login } = useContext(AuthContext);

  console.log(login);

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav + " container"}>
        <div className={styles.logo}>notify</div>
        <div className={styles.navLinks}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/notes">
            <a className={styles.link}>Notes</a>
          </Link>
          <button onClick={login} className={styles.loginBtn} type="button">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
