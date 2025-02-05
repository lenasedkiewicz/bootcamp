// selectors

// actions
const createActionName = actionName => `app/viewport/${actionName}`;
const SET_VIEWPORT = createActionName('SET_VIEWPORT');

// action creators
export const setViewport = payload => ({ type: SET_VIEWPORT, payload });

const viewportReducer = (statePart = { mode: '' }, action) => {
  switch (action.type) {
    case SET_VIEWPORT: {
      return { mode: action.payload };
    }
    default:
      return statePart;
  }
};

export default viewportReducer;
