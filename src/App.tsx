import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterType>('all')

    const deleteTask = (idTask: number) => {
        setTasks(tasks.filter(elem => elem.id !== idTask))
    }

    //фильтрация кнопок
    let filteredTasks = tasks
    if (filter === 'all') {filteredTasks = tasks}
    if (filter === 'active') {filteredTasks = tasks.filter(elem => !elem.isDone)}
    if (filter === 'completed') {filteredTasks = tasks.filter(elem => elem.isDone)}

    const changeFilter = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    return (
        <div className="App">
            <Todolist title={'Todolist'}
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
