import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "../css/BaseLayout.module.css";

export function BaseLayout() {
  return (
    <div className={styles.baselayout}>
      <nav>
        <Link className={styles.baselayout_logo} to={"/"}>
          Scribely
        </Link>
        <Link className={styles.baselayout_redirect} to={"Blogs"}>
          Blogs
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>@2023 Jorgen</small>
      </footer>
    </div>
  );
}
