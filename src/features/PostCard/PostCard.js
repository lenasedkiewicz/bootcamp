import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const PostCard = (props) => {
    return (
        <Card style={{ width: "18rem" }} className="mb-4">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <div><b>Author:</b> {props.author}</div>
            <div><b>Published:</b> {props.date}</div>
            <Card.Text>
              <div>
                <b>Short description:</b> {props.description}
              </div>
            </Card.Text>
            <Link key={props.id} to={"/post/" + props.id}>
              <Button variant="primary">Read more</Button>
            </Link>
          </Card.Body>
        </Card>
    );
  };

  export default PostCard;