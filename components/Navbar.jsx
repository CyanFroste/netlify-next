import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import AuthContext from "../stores/AuthContext";
import { useContext, useState } from "react";
import { useDisplaySize } from "../hooks/display";
import { Menu } from "../util/icons";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const displaySize = useDisplaySize();

  function NavLinks() {
    return (
      <div className={styles.navLinks}>
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
    );
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav + " container"}>
        <Link href="/">
          <a>
            <div className={styles.logo}>Notify</div>
          </a>
        </Link>

        {displaySize === "sm" && (
          <button
            className={styles.menuBtn}
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <Menu />
          </button>
        )}

        {authReady &&
          (displaySize === "lg" ? <NavLinks /> : isNavbarOpen && <NavLinks />)}
      </nav>
    </header>
  );
}
