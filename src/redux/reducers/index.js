import { GET_DATA } from "../types";
const INITIAL_STATE = {
    data: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
            return {
                ...state, 
                data: action.payload,
      }
  
    default:
      return INITIAL_STATE;
  }
};

export default moviesReducer;