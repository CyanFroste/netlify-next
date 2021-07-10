import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import AuthContext from "../stores/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav + " container"}>
        <div className={styles.logo}>notify</div>
        {authReady && (
          <div className={styles.navLinks}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
            <Link href="/notes">
              <a className={styles.link}>Notes</a>
            </Link>
            {!user && (
              <button onClick={login} className={styles.btn} type="button">
                Log in / Sign up
              </button>
            )}
            {user && (
              <button onClick={logout} className={styles.btn} type="button">
                {user.email} ( logout )
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
