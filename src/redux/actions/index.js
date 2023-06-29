import { GET_DATA } from "../types";
import { getData } from '../../services';

export const getData_ = (params) => (dispatch, getState) => {
  try {
          getData(params).then((data) => {
              dispatch({
                  type: GET_DATA,
                  payload: data.data.data? data.data.data : []
                });
          })
      
    } catch (error) {
      console.log("Error", error);
    }

}
