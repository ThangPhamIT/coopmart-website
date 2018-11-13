import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from "../types/types";
import api from '../api/api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => 
    api.user.login(credentials).then(user => {
        console.log('result login: ', user)
        localStorage.bookwormJWT = user.token;
        localStorage.bookwormUser = user.username;
        localStorage.bookwormTest = user.submitTest;
        localStorage.department = user.department;
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    console.log('logout');
    localStorage.removeItem('bookwormJWT');
    localStorage.removeItem('bookwormUser');
    localStorage.removeItem('bookwormTest');
    localStorage.removeItem('department');
    dispatch(userLoggedOut());
};