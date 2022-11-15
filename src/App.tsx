import React, { useState } from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {UniversalInput} from "./components/universal_components/UniversalInput";
import {UniversalButton} from "./components/universal_components/UniversalButton";
import {
    AddTodolistActionCreator,
    ChangeFilterActionCreator, ChangeTodolistTitleActionCreator,
    DeleteTodolistActionCreator,
} from "./redux/todolistReducer";
import {
    AddTaskActionCreator,
    ChangeTaskStatusActionCreator,
    DeleteTaskActionCreator,
    EditTaskTitleActionCreator,
} from "./redux/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./redux/store";

export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}
export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistTasksType = {
    [todolistID: string]: TasksType[]
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const [titleTodolist, setTitleTodolist] = useState('')
    const dispatch = useDispatch()

    const todolists = useSelector<StateType, TodolistsType[]>(state => state.todolists)
    const tasks = useSelector<StateType, TodolistTasksType>(state => state.tasks)
    //todolists change
    const changeFilter = (filter: FilterType, todolistID: string) => {
        dispatch(ChangeFilterActionCreator(todolistID, filter))
    }
    const deleteTodolist = (todolistID: string) => {
        dispatch(DeleteTodolistActionCreator(todolistID))
    }
    const addTodolist = () => {
        if (titleTodolist !== '') {
            dispatch(AddTodolistActionCreator(titleTodolist))
            setTitleTodolist('')
        }
    }
    const changeTodolistTitle = (newTitle: string, todolistID: string) => {
        dispatch(ChangeTodolistTitleActionCreator(todolistID, newTitle))
    }

    //tasks change
    const editTaskTitle = (newTitle: string, todolistID: string, taskID: string) => {
        dispatch(EditTaskTitleActionCreator(todolistID, taskID, newTitle))
    }
    const deleteTask = (taskID: string, todolistID: string) => {
        dispatch(DeleteTaskActionCreator(todolistID, taskID))
    }
    const addTask = (taskTitle: string, todolistID: string) => {
        dispatch(AddTaskActionCreator(todolistID, taskTitle))
    }
    const changeStatus = (taskID: string, newStatus: boolean, todolistID: string) => {
        dispatch(ChangeTaskStatusActionCreator(todolistID, taskID, newStatus))
    }

    const onChangeTodolistTitle = (text: string) => {
        setTitleTodolist(text)
    }
    const onKeyPressTodolistTitle = () => {
        addTodolist()
    }

    let todo = todolists.map(elem => {
        //фильтрация кнопок
        let filteredTasks = tasks[elem.id]
        if (elem.filter === 'all') {
            filteredTasks = tasks[elem.id]
        }
        if (elem.filter === 'active') {
            filteredTasks = tasks[elem.id].filter(elem => !elem.isDone)
        }
        if (elem.filter === 'completed') {
            filteredTasks = tasks[elem.id].filter(elem => elem.isDone)
        }

        return (
            <Todolist todolistID={elem.id}
                      key={elem.id}
                      title={elem.title}
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      editTaskTitle={editTaskTitle}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      deleteTodolist={deleteTodolist}
                      changeTodolistTitle={changeTodolistTitle}/>
        )
    })

    return (
        <div>
            <header>
                <div className={'headerContainer'}>
                    <UniversalInput error={"Enter todolist title"}
                                    value={titleTodolist}
                                    onChangeText={(text) => onChangeTodolistTitle(text)}
                                    onEnter={onKeyPressTodolistTitle}/>
                    <UniversalButton name={'ADD TODOLIST'} callback={addTodolist}/>
                </div>
            </header>
            <div className="App">
                {todo}
            </div>
        </div>
    );
}

export default App;
