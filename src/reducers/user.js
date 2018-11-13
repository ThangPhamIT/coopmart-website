import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_SUBMIT_RESULT
} from "../types/types";

var initialState = {};

export default function user(state = initialState, action = {}) {
    console.log('reducer', action);
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        case USER_SUBMIT_RESULT:
            return action.user
        default:
            return state;
    }
}