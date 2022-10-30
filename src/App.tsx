import React, {useReducer, useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {UniversalInput} from "./components/universal_components/UniversalInput";
import {UniversalButton} from "./components/universal_components/UniversalButton";
import {
    AddTodolistActionCreator,
    ChangeFilterActionCreator, ChangeTodolistTitleActionCreator,
    DeleteTodolistActionCreator,
    todolistReducer
} from "./redux/todolistReducer";
import {
    AddTaskActionCreator,
    AddTaskListActionCreator, ChangeTaskStatusActionCreator,
    DeleteTaskActionCreator, DeleteTaskListActionCreator,
    EditTaskTitleActionCreator,
    tasksReducer
} from "./redux/tasksReducer";



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

    let todolistID1 = v1();
    let todolistID2 = v1();
    const [titleTodolist, setTitleTodolist] = useState('')

    const [todolists, dispatch] = useReducer(todolistReducer, [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, tasksDispatch] = useReducer(tasksReducer, {
            [todolistID1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Rest API", isDone: false},
                {id: v1(), title: "GraphQL", isDone: false},
            ],
            [todolistID2]: [
                {id: v1(), title: "HTML&CSS2", isDone: true},
                {id: v1(), title: "JS2", isDone: true},
                {id: v1(), title: "ReactJS2", isDone: false},
                {id: v1(), title: "Rest API2", isDone: false},
                {id: v1(), title: "GraphQL2", isDone: false},
            ]
        })

    //todolists change
    const changeFilter = (filter: FilterType, todolistID: string) => {
        dispatch(ChangeFilterActionCreator(todolistID, filter))
    }
    const deleteTodolist = (todolistID: string) => {
        dispatch(DeleteTodolistActionCreator(todolistID))
        tasksDispatch(DeleteTaskListActionCreator(todolistID))
    }
    const addTodolist = () => {
        if (titleTodolist !== '') {
            let newTodolistID = v1();
            dispatch(AddTodolistActionCreator(newTodolistID ,titleTodolist))
            tasksDispatch(AddTaskListActionCreator(newTodolistID))
            setTitleTodolist('')
        }
    }
    const changeTodolistTitle = (newTitle: string, todolistID: string) => {
        dispatch(ChangeTodolistTitleActionCreator(todolistID, newTitle))
    }

    //tasks change
    const editTaskTitle = (newTitle: string, todolistID: string, taskID: string) => {
        tasksDispatch(EditTaskTitleActionCreator(todolistID, taskID, newTitle))
    }
    const deleteTask = (taskID: string, todolistID: string) => {
        tasksDispatch(DeleteTaskActionCreator(todolistID, taskID))
    }
    const addTask = (taskTitle: string, todolistID: string) => {
        tasksDispatch(AddTaskActionCreator(todolistID, taskTitle))
    }
    const changeStatus = (taskID: string, newStatus: boolean, todolistID: string) => {
        tasksDispatch(ChangeTaskStatusActionCreator(todolistID, taskID, newStatus))
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
