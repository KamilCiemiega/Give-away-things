import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    authUser:null
};

const reducer = ( state = initialState, action ) => {
        switch(action.type){
            case actionTypes.LOGOUT_SUCCESS:
                return {
                    ...state,
                    authUser:action.authUser
                }
            default :
                return state;
        }
       

}

export default reducer