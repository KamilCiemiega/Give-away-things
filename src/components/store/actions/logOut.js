import * as actionTypes from './actionsTypes'

export const logOutSuccess = (authUser) => {
    return{
        type: actionTypes.LOGOUT_SUCCESS,
        authUser:authUser
    }
}