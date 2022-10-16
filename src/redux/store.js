import { createStore } from "redux";

const reducer = (state, action) => {
  return state;
};

const initialState = {
  books: [
    { id: 1, title: "Shogun", author: "James Clavell" },
    { id: 2, title: "the Witcher", author: "Andrzej Sapkowski" },
  ],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
