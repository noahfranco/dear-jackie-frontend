import axios from "axios";

export const START = "START";
export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";

const makeDataAction = () => (dispatch) => {
  dispatch({ type: START });
  axios
    .get("http://localhost:5000/api/event/getMarker")
    .then((res) => {
      dispatch({ type: FETCHING, payload: res.card });
    })
    .catch((error) => {
      dispatch({ type: FAILURE, payload: error });
    }, []);
};

export default makeDataAction;
