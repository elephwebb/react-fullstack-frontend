import { FETCH_USER } from "../actions/types";

/**
 * Reducer responsible for manage the state if a user is current LogIn or not
 * Return either null, false or payload
 * @param state
 * @param action
 */
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}