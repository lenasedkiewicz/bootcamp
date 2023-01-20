import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import PostCard from "../PostCard/PostCard";
import { dateToString } from "../../utils/dateToStr";

const PostContainer = () => {
  const posts = useSelector(getAllPosts);
  return (
    <div className="d-flex justify-content-between flex-wrap mt-5">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          id={post.id}
          title={post.title}
          author={post.author}
          date={dateToString(post.publishedDate)}
          description={post.shortDescription}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default PostContainer;
