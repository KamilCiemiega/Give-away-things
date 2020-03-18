import * as actionTypes from './actionsTypes'

export const logInError = (err) => {
    return{
        type: actionTypes.LOGIN_ERROR,
        logInError:err
    }
}