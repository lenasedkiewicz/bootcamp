import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SinglePost from "./pages/SinglePost/SinglePost";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import { Container } from "react-bootstrap";
import AddPostForm from "./features/AddPostForm/AddPostForm";
import EditPostForm from "./features/EditPostForm/EditPostForm";
import Categories from "./pages/Categories/Categories";
import CategoryFilter from "./features/CategoryFilter/CategoryFilter";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPostForm />} />
        <Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/category/" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryFilter />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
