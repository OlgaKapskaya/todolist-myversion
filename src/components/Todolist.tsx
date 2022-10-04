import React, {ChangeEvent, useState} from "react";
import {FilterType, TasksType} from "../App";

type TodolistProps = {
    title: string
    tasks: TasksType[]
    deleteTask: (idTask: string) => void
    changeFilter: (buttonName: FilterType) => void
    addTask: (title: string) => void
}

export const Todolist = (props: TodolistProps) => {
    const [text, setText] = useState('');

    const onClickALLHandler = () => {
        props.changeFilter('all')
    }
    const onClickActiveHandler = () => {
        props.changeFilter('active')
    }
    const onClickCompletedHandler = () => {
        props.changeFilter('completed')
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const onClickAddTaskHandler = () => {
        if (text.trim() !== '') {
            props.addTask(text.trim())
            setText('')
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={text}
                       onChange={onChangeInputHandler}/>
                <button onClick={onClickAddTaskHandler}>+</button>
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