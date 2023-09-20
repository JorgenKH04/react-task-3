import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function BaseLayout() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Scribely</Link>
        <Link to={"Blogs"}>Blogs</Link>
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
