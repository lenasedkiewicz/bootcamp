import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    navigate(-1);
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10} >
          <Form onSubmit={handleSubmit}>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="published">
                <Form.Label>Published</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  onChange={(e) => setPublishedDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                placeholder="Write here short description of your post."
                onChange={(e) => setshortDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Main Content</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={10}
                placeholder="Add your blog post text here."
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddPostForm;
