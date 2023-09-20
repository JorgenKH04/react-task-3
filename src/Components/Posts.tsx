import { useParams } from "react-router-dom";

import { useBlogStore } from "../data/blogpostStore";
import styles from "../css/Posts.module.css";

export function Posts() {
  const blogs = useBlogStore((state) => state.blogposts);
  const { blogpost } = useParams();
  return (
    <div className={styles.post}>
      {blogs.map((postData) => {
        const { title, img, headline, paragraph1, paragraph2, paragraph3 } =
          postData;
        return (
          <div key={title}>
            {blogpost === title && (
              <div>
                <img src={img} alt={headline} />
                <h1>{headline}</h1>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <p>{paragraph3}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
