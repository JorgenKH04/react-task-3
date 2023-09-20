import { Link } from "react-router-dom";

import { useBlogStore } from "../data/blogpostStore";
import styles from "../css/Blogs.module.css";

export function Blogs() {
  const blogs = useBlogStore((state) => state.blogposts);
  return (
    <div className={styles.blogs}>
      {blogs.map((postData) => {
        const { title, img, headline } = postData;
        return (
          <div className={styles.blogs_card}>
            <img src={img} alt={headline} />
            <Link key={`${title}Link`} to={`${title}`}>
              Read more
            </Link>
            <h3>{headline}</h3>
          </div>
        );
      })}
    </div>
  );
}
