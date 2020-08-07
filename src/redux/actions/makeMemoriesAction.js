import axios from "axios";
// actions type to indicate call back function process
export const START = "START";
export const FETCHED = "FETCHED";
export const FAILURE = "FAILURE";

const makeMemoriesActions = (state) => (dispatch) => {
  dispatch({ type: START });
  axios
    .post("http://localhost:5000/api/event/marker", state)
    .then((res) => {
      dispatch({ type: FETCHED, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FAILURE, payload: error });
    }, []);
};

export default makeMemoriesActions;
