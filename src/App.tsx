import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {UniversalInput} from "./components/universal_components/UniversalInput";
import {UniversalButton} from "./components/universal_components/UniversalButton";


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

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TodolistTasksType>({
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
    });

    const [titleTodolist, setTitleTodolist] = useState('')

    const deleteTask = (idTask: string, todolistID: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(elem => elem.id !== idTask)})
    }
    const changeFilter = (buttonName: FilterType, todolistID: string) => {
        setTodolists(todolists.map(elem => {
            return (
                elem.id === todolistID ? {...elem, filter: buttonName} : elem
            )
        }))
    }
    const addTask = (title: string, todolistID: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }
    const changeStatus = (idTask: string, isDone: boolean, todolistID: string) => {
        setTasks({
            ...tasks, [todolistID]: tasks[todolistID].map(elem => {
                return (
                    elem.id === idTask ? {...elem, isDone: isDone} : elem
                )
            })
        })
    }
    const deleteTodolist = (todolistID: string) => {
        setTodolists(todolists.filter( elem => elem.id !== todolistID))
    }
    const addTodolist = () => {
        if (titleTodolist !== ''){
            let newTodolist:TodolistsType = {id: v1(), title: titleTodolist, filter: 'all'}
            setTodolists([newTodolist, ...todolists])
            setTasks({...tasks, [newTodolist.id]: []})
            setTitleTodolist('')
        }

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
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      deleteTodolist={deleteTodolist}/>
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
