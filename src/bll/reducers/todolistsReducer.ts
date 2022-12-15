import {FilterType, TodolistAppType, TodolistType} from "../../common/types/types";
import {todolistAPI} from "../../api/todolistAPI";
import {Dispatch} from "redux";

export type TodolistsAT = AddTodolistAT | RemoveTodolistAT
    | ChangeTodolistTitleAT | ChangeTodolistFilterAT | SetTodolistsAT

export type AddTodolistAT = ReturnType<typeof addTodolistAC>
export type RemoveTodolistAT = ReturnType<typeof removeTodolistAC>
type ChangeTodolistTitleAT = ReturnType<typeof changeTodolistTitleAC>
type ChangeTodolistFilterAT = ReturnType<typeof changeTodolistFilterAC>
export type SetTodolistsAT = ReturnType<typeof setTodolistsAC>

const init_state: TodolistAppType[] = []

export const todolistsReducer = (state = init_state, action: TodolistsAT): TodolistAppType[] => {
    switch (action.type) {
        case "ADD_TODOLIST":
            return [{...action.todolist, filter: "all"}, ...state]
        case "REMOVE_TODOLIST":
            return state.filter(elem => elem.id !== action.id)
        case "CHANGE_TODOLIST_TITLE":
            return state.map(elem => elem.id === action.id
                ? {...elem, title: action.title}
                : elem
            )
        case "CHANGE_TODOLIST_FILTER":
            return state.map(elem => elem.id === action.id
                ? {...elem, filter: action.filter}
                : elem
            )
        case "SET_TODOLISTS":
            return action.todolists.map( elem => ({ ...elem, filter: "all"}))
        default:
            return state
    }
}
//action creators
export const addTodolistAC = (todolist: TodolistType) => {
    return {type: "ADD_TODOLIST", todolist} as const
}
export const removeTodolistAC = (todolistID: string) => {
    return {type: "REMOVE_TODOLIST", id: todolistID} as const
}
export const changeTodolistTitleAC = (todolistID: string, title: string) => {
    return {type: "CHANGE_TODOLIST_TITLE", id: todolistID, title} as const
}
export const changeTodolistFilterAC = (todolistID: string, filter: FilterType) => {
    return {type: "CHANGE_TODOLIST_FILTER", id: todolistID, filter} as const
}
export const setTodolistsAC = (todolists: TodolistType[]) => {
    return {type: "SET_TODOLISTS", todolists} as const
}

//thunk creators
export const getTodolictsTC = () => (dispatch: Dispatch<TodolistsAT>) => {
    todolistAPI.getTodolists()
        .then((res) => {
            dispatch(setTodolistsAC(res.data))
        })
}
export const deleteTodolictsTC = (todolistID: string) => (dispatch: Dispatch<TodolistsAT>) => {
    todolistAPI.deleteTodolist(todolistID)
        .then((res) => {
            dispatch(removeTodolistAC(todolistID))
        })
}
export const addTodolistTC = (title: string) => (dispatch: Dispatch<TodolistsAT>) => {
    todolistAPI.addTodolist(title)
        .then((res) => {
            dispatch(addTodolistAC(res.data.data.item))
        })
}
export const changeTodolistTitleTC = (todolistID: string, title: string) => (dispatch: Dispatch<TodolistsAT>) => {
    todolistAPI.updateTodolistTitle(todolistID, title)
        .then((res) => {
            dispatch(changeTodolistTitleAC(todolistID, title))
        })
}