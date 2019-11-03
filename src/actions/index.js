import axios from 'axios';
import { FETCH_USER } from "./types";

/**
 * Action fetchUser
 * We return a function instead of an Action with a parameter <Param> Dispatch which has an action as default
 * It will not dispatch an action until the request is completed
 * @returns {Function}
 */
export const fetchUser = () => async (dispatch) => {

    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
}