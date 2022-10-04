import React from "react";
import {TasksType} from "../App";

type TodolistProps = {
    title: string
    tasks: TasksType[]
}

export const Todolist: React.FC<TodolistProps> = (props) => {
    const {title, tasks} = props;
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map(elem => {
                    return (
                        <li key={elem.id}>
                            <input type="checkbox" checked={elem.isDone}/>
                            <span>{elem.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}