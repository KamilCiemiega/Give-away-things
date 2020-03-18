import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    items: [],
    currentPage: 1,
    todosPerPage: 3,
    currentTodos: [],
    currentView: 0,
    loadStatus: "init"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_LIST:
            const items = state.items.concat(action.items)
            return{
                ...state,
                items,
                loadStatus: action.loadStatus
            }
        case actionTypes.BUILD_LIST:
            let indexOfLastTodo = state.currentPage * state.todosPerPage;
            let indexOfFirstTodo = indexOfLastTodo - state.todosPerPage;
            let currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
                return {
                    ...state,
                    currentTodos:state.currentTodos.concat(currentTodos)
                }
        case actionTypes.ACTIVE_VIEW:
            return {
                ...state,
                currentView: action.activeView
            }
        case actionTypes.BUILD_BUTTONS:
            return {
                ...state,
                currentPage: action.currentButton
            }
        case actionTypes.FUNDATIONS_VIEW:
            return {
                ...state,
                currentPage:action.currentPage
            }
        case actionTypes.ORGANIZATIONS_VIEW:
            return {
                ...state,
                currentPage:action.currentPage
            }
        case actionTypes.COLLECTIONS_VIEW:
            return {
                ...state,
                currentPage:action.currentPage
            }
        default:
            return state;
    }

}

export default reducer;