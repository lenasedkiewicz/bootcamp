import { Row, Col } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";

const PostAdd = () => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <h1>Add Post</h1>
        </Col>
      </Row>
      <AddPostForm />
    </>
  );
};

export default PostAdd;
