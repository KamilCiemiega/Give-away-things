import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    regError:""
};

const reducer = ( state = initialState, action ) => {
        switch(action.type){
            case actionTypes.REGISTRY_ERROR:
                return {
                    ...state,
                    regError:action.regError
                }
            default :
                return state;
        }
       

}

export default reducer