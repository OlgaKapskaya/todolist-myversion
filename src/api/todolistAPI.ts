import axios from "axios"
import {TaskType, TodolistType, UpdateTaskType} from "../common/types/types";

type ResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
type GetTasksResponseType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "a3689f8d-4bdb-4cdd-9a1a-83733437adfc"
    }
})

export const todolistAPI = {
    getTodolists(){
        return instance.get<TodolistType[]>("todo-lists")
    },
    addTodolist(title: string){
        return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", { title })
    },
    deleteTodolist(todolistID: string){
        return instance.delete<ResponseType>(`todo-lists/${todolistID}`)
    },
    updateTodolistTitle(todolistID: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistID}`, {title})
    },
    getTasks(todolistID: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistID}/tasks`)
    },
    createTask(todolistID: string, title: string) {
        return instance.post<ResponseType<{ item: TaskType }>>(`todo-lists/${todolistID}/tasks`, {title})
    },
    deleteTask(todolistID: string, taskID: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskID}`)
    },
    updateTask(todolistID: string, taskID: string, task: UpdateTaskType) {
        return instance.put<ResponseType<{ item: TaskType }>>(`/todo-lists/${todolistID}/tasks/${taskID}`, task)
    }
}