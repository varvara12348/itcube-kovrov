import { SET_USER, UPDATE_USER_NAME } from './actionTypes';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const updateUserName = (name) => ({
    type: UPDATE_USER_NAME,
    payload: name,
});