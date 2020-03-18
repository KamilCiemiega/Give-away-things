import * as actionTypes from './actionsTypes'

export const registryError = (err) => {
    return{
        type: actionTypes.REGISTRY_ERROR,
        regError:err
    }
}