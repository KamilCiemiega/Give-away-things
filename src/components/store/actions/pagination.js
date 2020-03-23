import * as actionTypes from '../actions/actionsTypes';

export const loadList = (items,ready) => {
    return {
        type:actionTypes.LOAD_LIST,
        items:items,
        loadStatus:ready
    }
}

export const loadListFaild = (err) => {
    return {
        type:actionTypes.LOAD_LIST_FAILD,
        error: err
    }
}

export const buildList = (view,page) => {
    return {
        type: actionTypes.BUILD_LIST,
        activeView:view,
        currentPage:page
    }
}

export const buildButtons = (id) => {
    return{
        type:actionTypes.BUILD_BUTTONS,
        currentButton:id
    }
}

export const currentList = (page) => {
    return {
        type: actionTypes.CURRENT_LIST,
        currentPage:page
    }
}

