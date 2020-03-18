import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    firsFormValue:"",
    secondFormValue:"",
    active:false,
    thirdFormValue:{},
    fourthFormValue:[],
    pageNr:1
};

const reducer = ( state = initialState, action ) => {
        switch(action.type){
            case actionTypes.FIRST_FORM_VALUE:
                return {
                    ...state,
                    firsFormValue:action.firstFormValue
                }
            case actionTypes.SECOND_FORM_VALUE:
                return {
                    ...state,
                    secondFormValue:action.secondFormValue
                }
            case actionTypes.TOGGLE_CLASS:
                return {
                    ...state,
                    active:action.active
                }
            case actionTypes.THIRD_FORM_VALUE:
                return {
                    ...state,
                    thirdFormValue: action.thirdFormValue
                }
           case actionTypes.FOURTH_FORM_VALUE:
               return {
                   ...state,
                   fourthFormValue:state.fourthFormValue.concat(action.fourthFormValue)
               }
            case actionTypes.NEXT_PAGE:
                return {
                    ...state,
                    pageNr:action.nextPage
                }
            case actionTypes.PREVIEW_PAGE:
                return {
                    ...state,
                    pageNr:action.previewPage
                }
            default :
                return state;
        }
}

export default reducer