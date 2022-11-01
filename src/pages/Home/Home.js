import PostCard from "../../features/PostCard/PostCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";

const Home = () => {
  const posts = useSelector((state) => getAllPosts);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>
        <Link to="/post/add">
          <Button variant="outline-info">Add post</Button>
        </Link>
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            author={post.author}
            date={post.publishedDate}
            description={post.shortDescription}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
