import * as actionTypes from '../actions/actionsTypes';

export const loadList = (items,ready) => {
    return {
        type:actionTypes.LOAD_LIST,
        items:items,
        loadStatus:ready
    }
}

export const buildList = (view,page) => {
    return {
        type: actionTypes.BUILD_LIST,
        activeView:view,
        currentPage:page
    }
}

export const activeView = (view) => {
    return {
        type:actionTypes.ACTIVE_VIEW,
        activeView:view
    }
}

export const buildButtons = (id) => {
    return{
        type:actionTypes.BUILD_BUTTONS,
        currentButton:id
    }
}

export const fundationsView = (elem) => {
    return {
        type:actionTypes.FUNDATIONS_VIEW,
        currentPage:elem
    }
}
export const organizationsView = (elem) => {
    return {
        type:actionTypes.ORGANIZATIONS_VIEW,
        currentPage:elem
    }
}
export const collectionsView = (elem) => {
    return {
        type:actionTypes.COLLECTIONS_VIEW,
        currentPage:elem
    }
}