import PostForm from "../PostForm/PostForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPost, getPostById } from "../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const EditPostForm = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editedPostContent = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  };

  if (!editedPostContent) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PostForm
        action={handleSubmit}
        actionText={"Edit Post"}
        title={editedPostContent.title}
        author={editedPostContent.author}
        publishedDate={editedPostContent.publishedDate}
        shortDescription={editedPostContent.shortDescription}
        content={editedPostContent.content}
        id={id}
      />
    </>
  );
};

export default EditPostForm;
