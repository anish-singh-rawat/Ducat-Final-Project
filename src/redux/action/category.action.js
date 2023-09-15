import {
    ADD_CATEGORY_ERROR,
    ADD_CATEGORY_START, ADD_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR, DELETE_CATEGORY_START,
    DELETE_CATEGORY_SUCCESS, EDIT_CATEGORY_ERROR,
    EDIT_CATEGORY_START, EDIT_CATEGORY_SUCCESS,
    GET_CATEGORY_ERROR, GET_CATEGORY_START,
    GET_CATEGORY_SUCCESS, UPDATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS
} from "../constant/category.constent";

export const getCategorystart = () => ({
    type: GET_CATEGORY_START
})

export const getCategorysuccess = (data) => ({
    type: GET_CATEGORY_SUCCESS,
    payload: data
})

export const getCategoryerror = (error) => ({
    type: GET_CATEGORY_ERROR,
    payload: error
})


export const addCategorystart = (data) => ({
    type: ADD_CATEGORY_START,
    payload: data
})

export const addCategorysuccess = (data) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data
})

export const addCategoryerror = (error) => ({
    type: ADD_CATEGORY_ERROR,
    payload: error
})

export const editCategorystart = (index, data) => ({
    type: EDIT_CATEGORY_START,
    payload: {
        index,
        data
    }
})

export const editCategorysuccess = (index, data) => ({
    type: EDIT_CATEGORY_SUCCESS,
    payload: {
        index,
        data
    }
})

export const editCategoryerror = (error) => ({
    type: EDIT_CATEGORY_ERROR,
    payload: error
})

export const updateCategorystart = (id, data) => ({
    type: UPDATE_CATEGORY_START,
    payload: {
        id,
        data
    }
})

export const updateCategorysuccess = (id, data) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: {
        id,
        data
    }
})

export const updateCategoryerror = (error) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: error
})

export const deleteCategorystart = (data) => ({
    type: DELETE_CATEGORY_START,
    payload: data
})

export const deleteCategorysuccess = (data) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: data
})

export const deleteCategoryerror = (error) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: error
})