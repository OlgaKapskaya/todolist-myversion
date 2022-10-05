import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType, TasksType} from "../App";
import s from './Todolist.module.css'
import {UniversalButton} from "./universal_components/UniversalButton";
import {UniversalCheckbox} from "./universal_components/UniversalCheckbox";

type TodolistProps = {
    title: string
    tasks: TasksType[]
    deleteTask: (idTask: string) => void
    changeFilter: (buttonName: FilterType) => void
    addTask: (title: string) => void
    changeStatus: (idTask: string, isDone: boolean) => void
}

export const Todolist = (props: TodolistProps) => {
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [buttonName, setButtonName] = useState('all');

    const onClickALLHandler = () => {
        props.changeFilter('all')
        setButtonName('all')
    }
    const onClickActiveHandler = () => {
        props.changeFilter('active')
        setButtonName('active')
    }
    const onClickCompletedHandler = () => {
        props.changeFilter('completed')
        setButtonName('completed')
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
        setError("");
    }
    const onClickAddTaskHandler = () => {
        if (text.trim() !== '') {
            props.addTask(text.trim())
            setText('')
            setError('')
        } else {
            setError('Error! Enter the task')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickAddTaskHandler()
        }
    }

    let inputClassName = error && s.error

    return (
        <div className={s.todolistContainer}>
            <h3>{props.title}</h3>
            <div>
                <div className={s.errorMessage}> {error}</div>
                <input value={text}
                       className={inputClassName}
                       onChange={onChangeInputHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickAddTaskHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map(elem => {

                    const onClickDelHandler = () => {
                        props.deleteTask(elem.id)
                    }
                    // const onChangeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
                    //     props.changeStatus(elem.id, event.currentTarget.checked)
                    // }
                    const onChangeStatusHandler = (isDone: boolean) => {
                        props.changeStatus(elem.id, isDone)
                    }

                    return (
                        <li key={elem.id} className={elem.isDone ? s.isDone : ""}>
                            <UniversalButton name={'DEL'} callback={onClickDelHandler}/>
                            <UniversalCheckbox checked={elem.isDone} callback={(isDone)=>onChangeStatusHandler(isDone)}/>
                            {/*<button className={s.buttonDelete} onClick={onClickDelHandler}>DEL</button>*/}
                            {/*<input type="checkbox" checked={elem.isDone} onChange={onChangeStatusHandler}/>*/}
                            <span>{elem.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button className={buttonName==='all' ? s.activeFilter : s.disactiveFilter} onClick={onClickALLHandler}>All</button>
                <button className={buttonName==='active' ? s.activeFilter : s.disactiveFilter} onClick={onClickActiveHandler}>Active</button>
                <button className={buttonName==='completed' ? s.activeFilter : s.disactiveFilter} onClick={onClickCompletedHandler}>Completed</button>
            </div>
        </div>
    )
}