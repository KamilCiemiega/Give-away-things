import * as actionTypes from './actionsTypes'


export const dataStatus = (res) => {
    return {
        type: actionTypes.DATA_STATUS,
        status: res
    }
}

export const sendData = (values) => {
    return dispatch => {
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message
        })
    })
        .then(resp => resp.json())
        .then(data => {
                console.log(data)
                dispatch(dataStatus(data.status))
        })
    }
}