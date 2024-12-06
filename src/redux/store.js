import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import listsReducer from './listsReducer';
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import searchStringReducer from "./searchStringReducer";

// action creators

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
