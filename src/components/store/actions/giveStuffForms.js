import * as actionTypes from './actionsTypes'

export const firstFormValue = (val) => {
    return {
        type: actionTypes.FIRST_FORM_VALUE,
        firstFormValue: val
    }
}

export const secondFormValue = (val) => {
    return {
        type: actionTypes.SECOND_FORM_VALUE,
        secondFormValue: val
    }
}

export const thirdFormValue = (val) => {
    return {
        type: actionTypes.THIRD_FORM_VALUE,
        thirdFormValue: val
    }
}

export const fourthFormValue = (val) => {
    return {
        type: actionTypes.FOURTH_FORM_VALUE,
        fourthFormValue:val
    }
}

export const nextPage = (number) => {
    return {
        type:actionTypes.NEXT_PAGE,
        nextPage:number
    }
}
export const previewPage = (number) => {
    return {
        type:actionTypes.PREVIEW_PAGE,
        previewPage:number
    }
}