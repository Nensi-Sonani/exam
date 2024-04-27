import axios from "axios";
import { ERROR, LOADING, SUCCESS } from "./ActionType";

export const reduxaction =  () => {
    return async (dispatch)=>{
        dispatch({
            type: LOADING,
          });
        
          try {
            const res = await axios.get("http://localhost:3000/items");
            return dispatch({ type: SUCCESS, payload: res.data });
          } catch (error) {
            return dispatch({ type: ERROR });
          }
    }
   
}; 
