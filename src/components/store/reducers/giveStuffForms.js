import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    firsFormValue:"",
    secondFormValue:"",
    thirdFormValue:{},
    fourthFormValue:[],
    pageNr:1
};

const firstFormValue = (state,action) => {
    return updateObject(state,{firsFormValue:action.firstFormValue})
}

const secondFormValue = (state,action) => {
    return updateObject(state,{secondFormValue:action.secondFormValue})
}

const thirdFormValue = (state,action) => {
    return updateObject(state,{thirdFormValue:action.thirdFormValue})
}

const fourthFormValue = (state,action) => {
    return updateObject(state,{
        fourthFormValue:state.fourthFormValue.concat(action.fourthFormValue)
    })
}

const nextPage = (state,action) => {
    return updateObject(state,{pageNr:action.nextPage})
}

const previewPage = (state,action) => {
    return updateObject(state,{pageNr:action.previewPage})
}



const reducer = ( state = initialState, action ) => {
        switch(action.type){
            case actionTypes.FIRST_FORM_VALUE: return firstFormValue(state, action);
            case actionTypes.SECOND_FORM_VALUE: return secondFormValue(state, action);
            case actionTypes.THIRD_FORM_VALUE: return thirdFormValue(state, action);
            case actionTypes.FOURTH_FORM_VALUE:  return fourthFormValue(state, action);
            case actionTypes.NEXT_PAGE: return nextPage(state,action)
            case actionTypes.PREVIEW_PAGE: return previewPage(state,action)
            default :
                return state;
        }
}

export default reducer