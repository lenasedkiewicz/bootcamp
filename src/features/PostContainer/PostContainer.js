import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import PostCard from "../PostCard/PostCard";

const PostContainer = () => {
  const posts = useSelector(getAllPosts);
  console.log(posts);
  return (
    <div className="d-flex justify-content-between flex-wrap mt-5">
      {posts.map((post, index) => (
        <div key={index}>
          <PostCard
            id={post.id}
            title={post.title}
            author={post.author}
            date={post.publishedDate}
            description={post.shortDescription}
          />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
