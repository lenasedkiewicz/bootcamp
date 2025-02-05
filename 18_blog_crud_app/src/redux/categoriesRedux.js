import { nanoid } from "nanoid";

//selectors
export const allCategories = ({ categories }) => categories;

// actions
const createActionName = (actionName) => `app/categories/${actionName}`;
const ADD_CATEGORY = createActionName('ADD_CATEGORY');
const REMOVE_CATEGORY = createActionName('REMOVE_CATEGORY');

// action creators
export const removeCategory = (payload) => ({ type: REMOVE_CATEGORY, payload });
export const addCategory = (payload) => ({ type: ADD_CATEGORY, payload });

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case REMOVE_CATEGORY:
      return statePart.filter((category) => category.id !== action.payload);
    default:
      return statePart;
  }
};

export default categoriesReducer;