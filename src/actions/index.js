import axios from 'axios';
import { FETCH_USER } from "./types";

/**
 * Action fetchUser
 * @returns {Function}
 */
const fetchUser = () => {
    /**
     * We're return a function instead of an Action that has a parameter <Param> Dispatch an action as default
     * It will not dispatch an action until the request is completed
     */
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({type: FETCH_USER, payload: res}));
    }
};