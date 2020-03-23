import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    items: [],
    currentPage: 1,
    todosPerPage: 3,
    currentTodos: [],
    currentView: 0,
    loadStatus: "init",
    error:""
};

const loadList = (state,action) => {
    const items = state.items.concat(action.items)
    return updateObject(state,{items,loadStatus:action.loadStatus})
}

const loadListFaild = (state,action) => {
    return updateObject(state,{error:action.error})
}

const buildList = (state,action) => {
    const indexOfLastTodo = action.currentPage * state.todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - state.todosPerPage;
    const currentTodos = state.items.slice(indexOfFirstTodo, indexOfLastTodo);
    return updateObject(state,{
        currentTodos:state.currentTodos.concat(currentTodos),
        currentView:action.activeView,
        currentPage:action.currentPage,
    })
}

const buildButtons = (state,action) => {
    return updateObject(state,{currentPage: action.currentButton})
}

const currentList = (state,action) => {
    const lastTodo = action.currentPage * state.todosPerPage;
    const firstTodo = lastTodo - state.todosPerPage;
    const todos = state.items.slice(firstTodo, lastTodo);
    return updateObject(state,{
        currentTodos:state.currentTodos.concat(todos),
        currentPage: action.currentPage
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_LIST: return loadList(state,action);
        case actionTypes.LOAD_LIST_FAILD: return loadListFaild(state,action);
        case actionTypes.BUILD_LIST: return buildList(state,action);
        case actionTypes.BUILD_BUTTONS: return buildButtons(state,action)
        case actionTypes.CURRENT_LIST: return currentList(state,action);
        default:
            return state;
    }
}

export default reducer;