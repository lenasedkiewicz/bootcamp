import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostContainer from "../../features/PostContainer/PostContainer";


const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>
        <Link to="/post/add">
          <Button variant="outline-info">Add post</Button>
        </Link>
      </div>
      <PostContainer />
    </>
  );
};

export default Home;
