import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, EDIT_USER_ERROR, EDIT_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "../constant/user.constent"

export const getUserstart = () => ({
    type: GET_USER_START
})

export const getUsersuccess = (data) => ({
    type: GET_USER_SUCCESS,
    payload: data
})

export const getUsererror = (error) => ({
    type: GET_USER_ERROR,
    payload: error
})


export const addUserstart = (data) => ({
    type: ADD_USER_START,
    payload: data
})

export const addUsersuccess = (data) => ({
    type: ADD_USER_SUCCESS,
    payload: data
})

export const addUsererror = (error) => ({
    type: ADD_USER_ERROR,
    payload: error
})

export const editUserstart = (index, data) => ({
    type: EDIT_USER_ERROR,
    payload: {
        index,
        data
    }
})

export const editUsersuccess = (index, data) => ({
    type: EDIT_USER_SUCCESS,
    payload: {
        index,
        data
    }
})

export const editUsererror = (error) => ({
    type: EDIT_USER_ERROR,
    payload: error
})

export const updateUserstart = (id, data) => ({
    type: UPDATE_USER_START,
    payload: {
        id,
        data
    }
})

export const updateUsersuccess = (id, data) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {
        id,
        data
    }
})

export const updateUsererror = (error) => ({
    type: UPDATE_USER_ERROR,
    payload: error
})

export const deleteUserstart = (data) => ({
    type: DELETE_USER_START,
    payload: data
})

export const deleteUsersuccess = (data) => ({
    type: DELETE_USER_SUCCESS,
    payload: data
})

export const deleteUsererror = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})