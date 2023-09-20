import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BaseLayout } from "./Layout/BaseLayout";
import { Blogs } from "./Components/Blogs";
import { Posts } from "./Components/Posts";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<h1>TEMP</h1>} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Blogs/:blogpost" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
