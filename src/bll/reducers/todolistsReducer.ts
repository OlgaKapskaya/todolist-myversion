import {ActionsAppType, FilterType, TodolistAppType, TodolistType} from "../../common/types/types";
import {v1} from "uuid";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../store";
import {todolistAPI} from "../../api/todolistAPI";

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
            return [{id: action.id, title: action.title, order: 0, addedDate: "", filter: "all"}, ...state]
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
export const addTodolistAC = (title: string) => {
    return {type: "ADD_TODOLIST", title, id: v1()} as const
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
export const getTodolictsTC = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsAppType>) => {
    todolistAPI.getTodolists()
        .then((res) => {
            dispatch(setTodolistsAC(res.data))
        })
}