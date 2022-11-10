import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SinglePost from "./pages/SinglePost/SinglePost";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import { Container } from "react-bootstrap";
import AddPostForm from './features/AddPostForm/AddPostForm';
import EditPostForm from './features/EditPostForm/EditPostForm';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPostForm />} />
        <Route path="/post/edit/:postId" element={<EditPostForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
