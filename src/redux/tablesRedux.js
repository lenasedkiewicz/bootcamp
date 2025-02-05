import { API_URL } from "../config.js";

//selectors
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);
export const getAllTables = ({ tables }) => tables;

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

// action creators
const UPDATE_TABLE = createActionName("UPDATE_TABLE");
const EDIT_TABLE = createActionName("EDIT_TABLE");

export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + "/tables")
      .then((res) => res.json())
      .then((tables) => dispatch(updateTable(tables)));
  };
};

export const updateTableRequest = (updatedTable) => {
  return (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTable),
    };

    fetch(API_URL + "/tables/" + updatedTable.id, options).then(() =>
      dispatch(editTable(updatedTable))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tablesReducer;