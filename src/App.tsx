import { useBlogStore } from "./data/blogposts";

export function App() {
  const blogs = useBlogStore((state) => state.blogposts);
  // const addBlog = useBlogStore((state) => state.addBlog);
  // addBlog({
  //   title: "HELLO MY BLOG",
  //   img: "test",
  //   headline: "string",
  //   paragraph1: "string",
  //   paragraph2: "string",
  //   paragraph3: "string",
  // });

  console.log(blogs);
  return (
    <>
      <div>
        {blogs.map((blog) => (
          <h1 key={blog.title}>{blog.title}</h1>
        ))}
      </div>
    </>
  );
}
