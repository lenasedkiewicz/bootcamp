import shortid from "shortid";
import strContains from "../utils/strContains";

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getFavouriteCard = (state) =>
  state.cards.filter((card) => card.isFavourite === true);

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_CARD = createActionName("ADD_CARD");
const TOGGLE_CARD_FAVOURITE = createActionName("TOGGLE_CARD_FAVOURITE");
const REMOVE_CARD = createActionName("REMOVE_CARD");

// action creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavourite = (payload) => ({
  type: TOGGLE_CARD_FAVOURITE,
  payload,
});
export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVOURITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavourite: !card.isFavourite }
          : card
      );
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;
