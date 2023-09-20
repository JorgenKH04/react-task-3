import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BaseLayout } from "./Layout/BaseLayout";
import { FrontPage } from "./Components/FrontPage";
import { Blogs } from "./Components/Blogs";
import { Posts } from "./Components/Posts";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<FrontPage />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Blogs/:blogpost" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
