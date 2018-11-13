import {
    USER_SUBMIT_RESULT
} from "../types/types";
import api from '../api/api';

import { userLoggedIn } from "./authenticate";

export const userSubmitResult = test => ({
    type: USER_SUBMIT_RESULT,
    user: test
});

export const signup = data => dispatch => 
    api.user.signup(data).then(user => {
        console.log('action signup', user);
        localStorage.bookwormJWT = user.token;
        localStorage.bookwormUser = user.username;
        localStorage.department = user.department;
        dispatch(userLoggedIn(user));
    });

export const sendResult = data => dispatch => {
    console.log('send Result ', data);
    api.user.sendResult(data).then(test => {
        console.log('response result ', test);
        localStorage.bookwormTest = test.submitTest;
        dispatch(userSubmitResult(test));
    })};