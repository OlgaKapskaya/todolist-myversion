import {combineReducers, legacy_createStore} from "redux";
import {todolistReducer} from "./todolistReducer";
import {tasksReducer} from "./tasksReducer";

export const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer)

export type StateType = ReturnType<typeof rootReducer>