import { START, FETCHED, FAILURE } from "../actions/makeMemoriesAction.js";

const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

const makeMemoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHED:
      return {
        ...state,
        isFetching: false,
        // passing data to our array
        data: action.payload,
      };
    case FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default makeMemoriesReducer;
