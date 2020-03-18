import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    logInError:""
};

const reducer = ( state = initialState, action ) => {
        switch(action.type){
            case actionTypes.LOGIN_ERROR:
                return {
                    ...state,
                    logInError:action.logInError
                }
            default :
                return state;
        }
       

}

export default reducer