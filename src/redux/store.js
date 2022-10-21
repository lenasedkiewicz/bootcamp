import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getAllColumns = (state) => state.columns;
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId); // koństrukcja...
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId); // koństrukcja
export const getAllLists = (state) => state.lists;
export const searchInputValue = (state) => state.searchString;
export const getFavouriteCard = (state) =>
  state.cards.filter((card) => card.isFavourite === true);

// action creators
export const addList = (payload) => ({ type: "ADD_LIST", payload });
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const updateSearchString = (payload) => ({
  type: "UPDATE_SEARCHSTRING",
  payload,
});
export const toggleCardFavourite = (payload) => ({
  type: "TOGGLE_CARD_FAVOURITE",
  payload,
});

//data
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortid() }],
      };
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case "UPDATE_SEARCHSTRING":
      return { ...state, searchString: action.payload };
    case "TOGGLE_CARD_FAVOURITE":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavourite: !card.isFavourite }
            : card
        ),
      }; // omówić!
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
