import * as actionTypes from '../actions/actionsTypes';

export const buildList = () => {
    return {
        type:actionTypes.BUILD_LIST
    }
}

export const activeView = (view) => {
    return {
        type:actionTypes.ACTIVE_VIEW,
        activeView:view
    }
}