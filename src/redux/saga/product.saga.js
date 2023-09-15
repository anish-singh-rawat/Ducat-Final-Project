import {put, takeLatest} from 'redux-saga/effects'
import { addProducttofirebase, deleteProductFromfirebase, getProductFromFirebse, updateProductFromfirebase } from '../service/product.service copy'
import { addProducterror, deleteProducterror, getProducterror, getProductstart, getProductsuccess, updateProducterror } from '../action/product.action'
import { ADD_PRODUCT_START, DELETE_PRODUCT_START, GET_PRODUCT_START, UPDATE_PRODUCT_START } from '../constant/Product.constent'

function* getProduct(){
    try {
  
        let data =  yield getProductFromFirebse()
        yield put(getProductsuccess(data))
    } catch (error) {
        yield put (getProducterror(error.message))
    }
}

function* addProduct ({payload}){
    try {
       let result =  yield addProducttofirebase(payload)
       yield put(getProductstart())

    } catch (error) {
        yield put (addProducterror(error.message))
    }
}
function* updateProduct ({payload}){
    try {
       let result =  yield updateProductFromfirebase(payload.id, payload.data)
       yield put(getProductstart())

    } catch (error) {
        yield put (updateProducterror(error.message))
    }
}

function* deleteProduct ({payload}){
    try {
       let result =  yield deleteProductFromfirebase(payload)
       yield put(getProductstart())
    } catch (error) {
        yield put (deleteProducterror(error.message))
    }
}


export function *  product(){
    yield takeLatest(GET_PRODUCT_START, getProduct)
    yield takeLatest(ADD_PRODUCT_START, addProduct)
    yield takeLatest(UPDATE_PRODUCT_START, updateProduct)
    yield takeLatest(DELETE_PRODUCT_START, deleteProduct)

}