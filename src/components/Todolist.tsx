import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType, TasksType} from "../App";
import s from './Todolist.module.css'
import {UniversalButton} from "./universal_components/UniversalButton";
import {UniversalCheckbox} from "./universal_components/UniversalCheckbox";
import {UniversalInput} from "./universal_components/UniversalInput";

type TodolistProps = {
    title: string
    tasks: TasksType[]
    deleteTask: (idTask: string) => void
    changeFilter: (buttonName: FilterType) => void
    addTask: (title: string) => void
    changeStatus: (idTask: string, isDone: boolean) => void
}

export const Todolist = (props: TodolistProps) => {

    const [text, setText] = useState('') //for input
    const [error, setError] = useState('');
    const [buttonName, setButtonName] = useState('all'); //for filter-buttons

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

    const onClickAddTaskHandler = () => {
        if (text.trim() !== '') {
            props.addTask(text.trim())
            setError('')
            setText('')
        } else {
            setError('Error! Enter the task')
            setText('')
        }
    }
    const onKeyPressHandler = () => {
            onClickAddTaskHandler()
    }

    //let inputClassName = error && s.error

    return (
        <div className={s.todolistContainer}>
            <h3>{props.title}</h3>
            <div>
                <div className={s.errorMessage}> {error}</div>
                <UniversalInput
                    value={text}
                    onEnter={onKeyPressHandler}
                    onChangeText={setText}/>
                <UniversalButton name={'+'} callback={onClickAddTaskHandler}/>

            </div>
            <ul>
                {props.tasks.map(elem => {

                    const onClickDelHandler = () => {
                        props.deleteTask(elem.id)
                    }
                    const onChangeStatusHandler = (isDone: boolean) => {
                        props.changeStatus(elem.id, isDone)
                    }

                    return (
                        <li key={elem.id} className={elem.isDone ? s.isDone : ""}>
                            <UniversalButton name={'DEL'} callback={onClickDelHandler} style={'delete'}/>
                            <UniversalCheckbox checked={elem.isDone} callback={(isDone)=>onChangeStatusHandler(isDone)}/>
                            <span>{elem.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <UniversalButton name={'All'} callback={onClickALLHandler} style={buttonName==='all' ? 'active' : ''}/>
                <UniversalButton name={'Active'} callback={onClickActiveHandler} style={buttonName==='active' ? 'active' : ''}/>
                <UniversalButton name={'Completed'} callback={onClickCompletedHandler} style={buttonName==='completed' ? 'active' : ''}/>
            </div>
        </div>
    )
}