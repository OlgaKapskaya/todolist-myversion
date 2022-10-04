import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterType>('all')

    const deleteTask = (idTask: string) => {
        setTasks(tasks.filter(elem => elem.id !== idTask))
    }

    //фильтрация кнопок
    let filteredTasks = tasks
    if (filter === 'all') {
        filteredTasks = tasks
    }
    if (filter === 'active') {
        filteredTasks = tasks.filter(elem => !elem.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(elem => elem.isDone)
    }

    const changeFilter = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const changeStatus = (idTask: string, isDone: boolean) => {
        setTasks(tasks.map(elem => elem.id === idTask ? {...elem, isDone: isDone} : elem))
    }

    return (
        <div className="App">
            <Todolist title={'Todolist'}
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}/>
        </div>
    );
}

export default App;
