import {FilterType, TodolistsType} from "../App";
import {v1} from "uuid";

//const
const CHANGE_FILTER = 'CHANGE-FILTER'
const DELETE_TODOLIST = 'DELETE-TODOLIST'
const ADD_TODOLIST = 'ADD-TODOLIST'
const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE'

//initial state
const initialTodolists: TodolistsType[] = []
//full action type
type ActionTodolistType = ChangeFilterAction | DeleteTodolistAT | AddTodolistAT| ChangeTodolistTitle

//action types
type ChangeFilterAction = {
    type: 'CHANGE-FILTER'
    todolistID: string
    filter: FilterType
}
export type DeleteTodolistAT = {
    type: 'DELETE-TODOLIST'
    todolistID: string
}
export type AddTodolistAT = {
    type: 'ADD-TODOLIST'
    todolistID: string
    title: string
}
type ChangeTodolistTitle = {
    type: 'CHANGE_TODOLIST_TITLE'
    todolistID: string
    title: string
}

export const todolistReducer = (todolists = initialTodolists, action: ActionTodolistType): TodolistsType[] => {
    switch (action.type) {
        case CHANGE_FILTER: {
            return todolists.map(elem => elem.id === action.todolistID
                ? {...elem, filter: action.filter}
                : elem)
        }
        case DELETE_TODOLIST: {
            return todolists.filter(elem => elem.id !== action.todolistID)
        }
        case ADD_TODOLIST: {
            let newTodolist: TodolistsType = {id: action.todolistID, title: action.title, filter: 'all'}
            return [newTodolist, ...todolists]
        }
        case CHANGE_TODOLIST_TITLE: {
            return todolists.map(elem => elem.id === action.todolistID ? {...elem, title: action.title} : elem)
        }
        default: return todolists
    }

}

//action creators
export const ChangeFilterActionCreator = (todolistID: string, filter: FilterType) => {
    return {type: CHANGE_FILTER, todolistID, filter} as ChangeFilterAction
}
export const DeleteTodolistActionCreator = (todolistID: string) => {
    return {type: DELETE_TODOLIST, todolistID} as DeleteTodolistAT
}
export const AddTodolistActionCreator = (title: string) => {
    return {type: ADD_TODOLIST, todolistID: v1(), title} as AddTodolistAT
}
export const ChangeTodolistTitleActionCreator = (todolistID: string, title: string) => {
    return {type: CHANGE_TODOLIST_TITLE, todolistID, title} as ChangeTodolistTitle
}