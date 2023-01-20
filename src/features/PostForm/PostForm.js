import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  const [content, setContent] = useState(props.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <h1>{actionText}</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <Form onSubmit={validate(handleSubmit)}>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                {errors.title && <span>This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author"
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="published">
                <Form.Label>Published</Form.Label>
                <DatePicker
                  selected={publishedDate}
                  onChange={(date) => setPublishedDate(date)}
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
                required
                onChange={(e) => setShortDescription(e.target.value)}
                value={shortDescription}
              />
            </Form.Group>

            <Form.Label>Content</Form.Label>
            <ReactQuill value={content} onChange={setContent} />

            <Button variant="primary" type="submit">
              {actionText}
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default PostForm;
