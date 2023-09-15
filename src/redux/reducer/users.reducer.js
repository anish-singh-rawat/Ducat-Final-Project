import { GET_USER_SUCCESS } from "../constant/user.constent";

const initialState = {
    users :localStorage.getItem('products') ?  JSON.parse(localStorage.getItem('products')) :  []
}

 const userReducer = (state = initialState, action)=>{
    switch(action.type){

        case  GET_USER_SUCCESS :
            let data =  [...action.payload]
            localStorage.setItem('users', JSON.stringify(data));
            return {
                ...state,
                users :data
            }

        default :
        return state;
    }
}

export default userReducer;