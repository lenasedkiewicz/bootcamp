import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SinglePost from "./pages/SinglePost/SinglePost";
import PostAdd from "./pages/PostAdd/PostAdd";
import PostEdit from "./pages/PostEdit/PostEdit";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/post/add" element={<PostAdd />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
