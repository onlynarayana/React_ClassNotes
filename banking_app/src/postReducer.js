const initialState = [];

const postReducer = (state = initialState, action) => {
  if (action.type === "FETCH_POST") {
    return action.payload;
  }
  return state;
};

export default postReducer;
