import {TodolistsAT} from "../../bll/reducers/todolistsReducer";
import {TasksAT} from "../../bll/reducers/tasksReducer";

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type TodolistAppType = TodolistType & { filter : FilterType }

export type TaskType = {
    id: string
    todoListId: string
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: Date
    deadline: Date
    addedDate: Date
}
export type TaskAppType = {
    [key: string] : TaskType[]
}

export type UpdateTaskType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: Date
    deadline: Date
}
export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
export type FilterType = "all" | "active" | "completed"
export type ActionsAppType = TodolistsAT | TasksAT