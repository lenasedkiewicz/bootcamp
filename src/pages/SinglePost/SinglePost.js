import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../redux/postsRedux";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RemovePostModal from "../../features/RemovePostModal/RemovePostModal";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { removePost } from "../../redux/postsRedux";

const SinglePost = (props) => {
  const { id } = useParams();
  const postContent = useSelector((state) => getPostById(state, id));
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);
  const dispatch = useDispatch();
  const deletePost = (e) => {
    e.preventDefault();
    dispatch(removePost(postContent.id));
    setModal(false);
  }

  if (modal) {
    return <RemovePostModal show={modal} closeModal={closeModal} deletePost={deletePost} />;
  }

  if (!postContent) {
    return <Navigate to="/" />;
  } else
    return (
      <>
        <Row className="justify-content-center">
          <Col md={8} className="d-flex justify-content-between">
            <h1>{postContent.title}</h1>
            <div>
              <Link key={postContent.id} to={"/post/edit/" + postContent.id}>
                <Button variant="outline-info" className="m-2">
                  Edit
                </Button>
              </Link>
              <Button variant="outline-danger" onClick={openModal}>
                Delete
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <p>
              <b>Author: </b>
              {postContent.author}
            </p>
            <p>
              <b>Published:</b> {postContent.publishedDate}
            </p>
            <p>{postContent.content}</p>
          </Col>
        </Row>
      </>
    );
};

export default SinglePost;
