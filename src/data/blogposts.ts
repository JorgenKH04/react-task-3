import { create } from "zustand";
import { blogposts } from "./defaultposts";
import { BlogPostsInterface } from "./defaultposts";
interface BlogStore {
	blogposts: Array<BlogPostsInterface>;
	addBlog: (newBlog: BlogPostsInterface) => void;
}

export const useBlogStore = create<BlogStore>(() => ({
	blogposts: blogposts,
	addBlog: (newBlog) => {
		blogposts.push(newBlog);
	},
}));
