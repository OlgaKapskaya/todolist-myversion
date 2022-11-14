import {TodolistTasksType} from "../App";
import {v1} from "uuid";
import {AddTodolistAT, DeleteTodolistAT} from "./todolistReducer";

//const
const EDIT_TASK_TITLE = 'EDIT-TASK-TITLE'
const DELETE_TASK = 'DELETE-TASK'
const ADD_TASK = 'ADD-TASK'
const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS'

//full action type
type ActionTaskType = EditTaskTitleAction | DeleteTaskAction | AddTaskAction
    | ChangeTaskStatusAction | DeleteTodolistAT | AddTodolistAT
//action types
type EditTaskTitleAction = {
    type: 'EDIT-TASK-TITLE'
    todolistID: string
    taskID: string
    newTaskTitle: string
}
type DeleteTaskAction = {
    type: 'DELETE-TASK'
    todolistID: string
    taskID: string
}
type AddTaskAction = {
    type: 'ADD-TASK'
    todolistID: string
    taskTitle: string
}
type ChangeTaskStatusAction = {
    type: 'CHANGE-TASK-STATUS'
    todolistID: string
    taskID: string
    newStatus: boolean
}


export const tasksReducer = (tasks: TodolistTasksType, action: ActionTaskType) => {
    switch (action.type) {
        case EDIT_TASK_TITLE:
            return {
                ...tasks, [action.todolistID]: tasks[action.todolistID].map(elem => elem.id === action.taskID
                    ? {...elem, title: action.newTaskTitle}
                    : elem)}
        case DELETE_TASK:
            return {...tasks, [action.todolistID]: tasks[action.todolistID].filter(elem => elem.id !== action.taskID)}
        case ADD_TASK:
            let newTask = {id: v1(), title: action.taskTitle, isDone: false}
            return {...tasks, [action.todolistID]: [newTask, ...tasks[action.todolistID]]}
        case CHANGE_TASK_STATUS:
            return {
                ...tasks, [action.todolistID]: tasks[action.todolistID].map(elem => elem.id === action.taskID
                    ? {...elem, isDone: action.newStatus}
                    : elem)}
        case 'ADD-TODOLIST':
            return {...tasks, [action.todolistID]: []}
        case 'DELETE-TODOLIST':
            let newTasks = {...tasks}
            delete newTasks[action.todolistID]
            return newTasks
    }
}

//action creators
export const EditTaskTitleActionCreator = (todolistID: string, taskID: string, newTaskTitle: string) => {
    return {
        type: "EDIT-TASK-TITLE",
        todolistID: todolistID,
        taskID: taskID,
        newTaskTitle: newTaskTitle
    } as EditTaskTitleAction
}
export const DeleteTaskActionCreator = (todolistID: string, taskID: string) => {
    return {type: "DELETE-TASK", todolistID: todolistID, taskID: taskID} as DeleteTaskAction
}
export const AddTaskActionCreator = (todolistID: string, taskTitle: string) => {
    return {type: "ADD-TASK", todolistID: todolistID, taskTitle: taskTitle} as AddTaskAction
}
export const ChangeTaskStatusActionCreator = (todolistID: string, taskID: string, newStatus: boolean) => {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistID: todolistID,
        taskID: taskID,
        newStatus: newStatus
    } as ChangeTaskStatusAction
}
