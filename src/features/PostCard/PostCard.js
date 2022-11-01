import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const PostCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <p className="font-weight-bold">Author: {props.author}</p>
          <p className="text-muted">Published: {props.date}</p>
          <Card.Text>
            <p className="font-weight-bold">
              Short description: {props.description}
            </p>
          </Card.Text>
          <Link key={props.postId} to={"/post/" + props.postId}>
            <Button variant="primary">Read more</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
