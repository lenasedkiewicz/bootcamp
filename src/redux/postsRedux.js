//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, id) =>
  posts.find((post) => post.id === id);

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const REMOVE_POST = createActionName("REMOVE_POST");

// action creators
export const removePost = (id) => ({ type: REMOVE_POST, id });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.id);
    default:
      return statePart;
  }
};

export default postsReducer;
