import {put, takeLatest} from 'redux-saga/effects'
import { ADD_CATEGORY_START, DELETE_CATEGORY_START, GET_CATEGORY_START, UPDATE_CATEGORY_START } from '../constant/category.constent'
import { addCategorytofirebase, deleteCategoryFromfirebase, getCategoryFromFirebse, updateCategoryFromfirebase } from '../service/category.service'
import { addCategoryerror, deleteCategoryerror, getCategoryerror, getCategorystart, getCategorysuccess, updateCategoryerror } from '../action/category.action'


function* getCategory (){
    try {
  
        let data =  yield getCategoryFromFirebse()
        yield put(getCategorysuccess(data))
    } catch (error) {
        yield put (getCategoryerror(error.message))
    }
}

function* addCategory ({payload}){
    try {
       let result =  yield addCategorytofirebase(payload)
       yield put(getCategorystart())

    } catch (error) {
        yield put (addCategoryerror(error.message))
    }
}
function* updateCategory ({payload}){
    try {
       let result =  yield updateCategoryFromfirebase(payload.id, payload.data)
       yield put(getCategorystart())

    } catch (error) {
        yield put (updateCategoryerror(error.message))
    }
}

function* deleteCategory ({payload}){
    try {
       let result =  yield deleteCategoryFromfirebase(payload)
       yield put(getCategorystart())
    } catch (error) {
        yield put (deleteCategoryerror(error.message))
    }
}


export function *  category(){
    yield takeLatest(GET_CATEGORY_START, getCategory)
    yield takeLatest(ADD_CATEGORY_START, addCategory)
    yield takeLatest(UPDATE_CATEGORY_START, updateCategory)
    yield takeLatest(DELETE_CATEGORY_START, deleteCategory)

}