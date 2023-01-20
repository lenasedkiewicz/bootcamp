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
                  {...register("title", { required: true, minLength: 3 })}
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                {...register("author", { required: true, minLength: 3 })}
                  type="text"
                  placeholder="Enter author"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">Author's name is too short (min is 3)</small>}
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
              {...register("shortDescription", { required: true, minLength: 20 })}
                type="text"
                as="textarea"
                rows={3}
                placeholder="Write here short description of your post."
                onChange={(e) => setShortDescription(e.target.value)}
                value={shortDescription}
              />
              {errors.title && <small className="d-block form-text text-danger mt-2">Description should have at least 20 characters </small>}
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
