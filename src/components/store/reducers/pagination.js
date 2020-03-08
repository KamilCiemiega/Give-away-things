import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    items: [],
    currentPage: 1,
    todosPerPage: 3,
    currentTodos:0,
    currentView:0
};

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionTypes.BUILD_LIST:
            const indexOfLastTodo = state.currentPage * state.todosPerPage;
            const indexOfFirstTodo = state.indexOfLastTodo - state.todosPerPage;
            const currentTodos = state.items.slice(indexOfFirstTodo, indexOfLastTodo);
            return{
                ...state,
                currentTodos
            }
        case actionTypes.ACTIVE_VIEW:
            return{
                ...state,
                currentView:action.activeView
            }
    }

}

export default reducer