import { Link } from "react-router-dom";

import { useBlogStore } from "../data/blogpostStore";

export function Blogs() {
  const blogs = useBlogStore((state) => state.blogposts);
  return (
    <div>
      {blogs.map((postData) => {
        const { title, img, headline } = postData;
        return (
          <div>
            <img src={img} alt={headline} />
            <h3>{headline}</h3>
            <Link key={`${title}Link`} to={`${title}`}>
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
