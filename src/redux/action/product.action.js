import { ADD_PRODUCT_ERROR,
         ADD_PRODUCT_START,
         ADD_PRODUCT_SUCCESS,
         DELETE_PRODUCT_ERROR,
         DELETE_PRODUCT_START,
         DELETE_PRODUCT_SUCCESS,
         EDIT_PRODUCT_ERROR, 
         EDIT_PRODUCT_START, 
         EDIT_PRODUCT_SUCCESS,
         GET_PRODUCT_ERROR, 
         GET_PRODUCT_START, 
         GET_PRODUCT_SUCCESS,
         UPDATE_PRODUCT_ERROR, 
         UPDATE_PRODUCT_START, 
         UPDATE_PRODUCT_SUCCESS } from "../constant/Product.constent";

export const getProductstart = () => ({
    type: GET_PRODUCT_START
})
export const getProductsuccess = (data) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: data
})

export const getProducterror = (error) => ({
    type: GET_PRODUCT_ERROR,
    payload: error
})


export const addProductstart = (data) => ({
    type: ADD_PRODUCT_START,
    payload: data
})

export const addProductsuccess = (data) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: data
})

export const addProducterror = (error) => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
})

export const editProductstart = (index, data) => ({
    type: EDIT_PRODUCT_START,
    payload: {
        index,
        data
    }
})

export const editPRODUCTsuccess = (index, data) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: {
        index,
        data
    }
})

export const editProducterror = (error) => ({
    type: EDIT_PRODUCT_ERROR,
    payload: error
})

export const updateProductstart = (id, data) => ({
    type: UPDATE_PRODUCT_START,
    payload: {
        id,
        data
    }
})

export const updateProductsuccess = (id, data) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: {
        id,
        data
    }
})

export const updateProducterror = (error) => ({
    type: UPDATE_PRODUCT_ERROR,
    payload: error
})

export const deleteProductstart = (data) => ({
    type: DELETE_PRODUCT_START,
    payload: data
})

export const deleteProductsuccess = (data) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: data
})

export const deleteProducterror = (error) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: error
})