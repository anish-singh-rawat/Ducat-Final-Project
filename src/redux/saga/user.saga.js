import {put, takeLatest} from 'redux-saga/effects'
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, UPDATE_USER_START } from '../constant/user.constent'
import { addUsererror, deleteUsererror, getUsererror, getUserstart, getUsersuccess, updateUsererror } from '../action/user.action'
import { addUsertofirebase, deleteUserFromfirebase, getUserFromFirebse, updateUserFromfirebase } from '../service/users.service'

function* getUser(){
    try {
  
        let data =  yield getUserFromFirebse()
        yield put(getUsersuccess(data))
    } catch (error) {
        yield put (getUsererror(error.message))
    }
}

function* addUser({payload}){
    try {
       let result =  yield addUsertofirebase(payload)
       yield put(getUserstart())

    } catch (error) {
        yield put (addUsererror(error.message))
    }
}
function* updateUser({payload}){
    try {
       let result =  yield updateUserFromfirebase(payload.id, payload.data)
       yield put(getUserstart())

    } catch (error) {
        yield put (updateUsererror(error.message))
    }
}

function* deleteUser ({payload}){
    try {
       let result =  yield deleteUserFromfirebase(payload)
       yield put(getUserstart())
    } catch (error) {
        yield put (deleteUsererror(error.message))
    }
}


export function *  user(){
    yield takeLatest(GET_USER_START, getUser)
    yield takeLatest(ADD_USER_START, addUser)
    yield takeLatest(UPDATE_USER_START, updateUser)
    yield takeLatest(DELETE_USER_START, deleteUser)
}