import {FilterType, TodolistsType} from "../App";
import {v1} from "uuid";

//const
const CHANGE_FILTER = 'CHANGE-FILTER'
const DELETE_TODOLIST = 'DELETE-TODOLIST'
const ADD_TODOLIST = 'ADD-TODOLIST'
const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE'

//initial state
let todolistID1 = v1();
let todolistID2 = v1();
const initialTodolists: TodolistsType[] = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]
//full action type
type ActionTodolistType = ChangeFilterAction | DeleteTodolistAction | AddTodolistAction | ChangeTodolistTitle

//action types
type ChangeFilterAction = {
    type: 'CHANGE-FILTER'
    todolistID: string
    filter: FilterType
}
type DeleteTodolistAction = {
    type: 'DELETE-TODOLIST'
    todolistID: string
}
type AddTodolistAction = {
    type: 'ADD-TODOLIST'
    title: string
}
type ChangeTodolistTitle = {
    type: 'CHANGE_TODOLIST_TITLE'
    todolistID: string
    title: string
}

export const todolistReducer = (todolists: TodolistsType[] = initialTodolists, action: ActionTodolistType): TodolistsType[] => {
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
            let newTodolist: TodolistsType = {id: v1(), title: action.title, filter: 'all'}
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
    return <ChangeFilterAction>{type: CHANGE_FILTER, todolistID:todolistID, filter: filter}
}
export const DeleteTodolistActionCreator = (todolistID: string) => {
    return <DeleteTodolistAction>{type: DELETE_TODOLIST, todolistID: todolistID}
}
export const AddTodolistActionCreator = (title: string) => {
    return <AddTodolistAction>{type: ADD_TODOLIST, title: title}
}
export const ChangeTodolistTitleActionCreator = (todolistID: string, title: string) => {
    return <ChangeTodolistTitle>{type: CHANGE_TODOLIST_TITLE, todolistID: todolistID, title: title}
}