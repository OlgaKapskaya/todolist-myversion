import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ];
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title={'ver 1'} tasks={tasks}/>
            <Todolist title={'ver 2'} tasks={tasks2}/>
        </div>
    );
}

export default App;
