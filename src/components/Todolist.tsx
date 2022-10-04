import React from "react";
import {FilterType, TasksType} from "../App";

type TodolistProps = {
    title: string
    tasks: TasksType[]
    deleteTask: (idTask: number) => void
    changeFilter: (buttonName: FilterType) => void
}

export const Todolist = (props: TodolistProps) => {

    const onClickALLHandler = () => {
        console.log('all')
        props.changeFilter('all')
    }
    const onClickActiveHandler = () => {
        console.log('active')
        props.changeFilter('active')
    }
    const onClickCompletedHandler = () => {
        console.log('completed')
        props.changeFilter('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(elem => {

                    const onClickDelHandler = () => {
                        props.deleteTask(elem.id)
                    }

                    return (
                        <li key={elem.id}>
                            <button onClick={onClickDelHandler}>DEL</button>
                            <input type="checkbox" checked={elem.isDone}/>
                            <span>{elem.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={onClickALLHandler}>All</button>
                <button onClick={onClickActiveHandler}>Active</button>
                <button onClick={onClickCompletedHandler}>Completed</button>
            </div>
        </div>
    )
}