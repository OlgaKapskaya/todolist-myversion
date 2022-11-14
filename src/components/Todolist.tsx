import React, {useState} from "react";
import {FilterType, TasksType} from "../App";
import s from './Todolist.module.css'
import {UniversalButton} from "./universal_components/UniversalButton";
import {UniversalCheckbox} from "./universal_components/UniversalCheckbox";
import {UniversalInput} from "./universal_components/UniversalInput";
import del from '../trash.svg'
import {EditableSpan} from "./universal_components/EditableSpan";

type TodolistProps = {
    todolistID: string
    key: string
    title: string
    tasks: TasksType[]
    deleteTask: (idTask: string, todolistID: string) => void
    changeFilter: (buttonName: FilterType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeStatus: (idTask: string, isDone: boolean, todolistID: string) => void
    deleteTodolist: (todolistID: string) => void
    changeTodolistTitle: (title: string, todolistID: string) => void
    editTaskTitle: (title: string, todolistID: string, taskID: string) => void
}

export const Todolist = (props: TodolistProps) => {

    const [text, setText] = useState('') //for input
    const [buttonName, setButtonName] = useState('all'); //for filter-buttons

    const onClickALLHandler = () => {
        props.changeFilter('all', props.todolistID)
        setButtonName('all')
    }
    const onClickActiveHandler = () => {
        props.changeFilter('active', props.todolistID)
        setButtonName('active')
    }
    const onClickCompletedHandler = () => {
        props.changeFilter('completed', props.todolistID)
        setButtonName('completed')
    }
    const onClickAddTaskHandler = () => {
        if (text.trim() !== '') {
            props.addTask(text.trim(), props.todolistID)
            setText('')
        } else {
            setText('')
        }
    }
    const onKeyPressHandler = () => {
        onClickAddTaskHandler()
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(title, props.todolistID)
    }
    return (
        <div className={s.todolistContainer}>
            <div className={s.todolistTitleContainer}>
                <UniversalButton name={'delete todolist '} image={del} callback={() => props.deleteTodolist(props.todolistID)}/>
                <h3>
                    <EditableSpan title={props.title} changeTitle={changeTodolistTitle}/>
                </h3>
            </div>
            <div>
                <UniversalInput
                    value={text}
                    onEnter={onKeyPressHandler}
                    onChangeText={setText}
                    error={'Enter task title'}/>
                <UniversalButton name={'ADD'} callback={onClickAddTaskHandler}/>

            </div>

            {props.tasks.length === 0 ? <span className={s.emptyMessage}> Task list is empty </span> : <ul>
                {props.tasks.map(elem => {

                    const onClickDelHandler = () => {
                        props.deleteTask(elem.id, props.todolistID)
                    }
                    const onChangeStatusHandler = (isDone: boolean) => {
                        props.changeStatus(elem.id, isDone, props.todolistID)
                    }
                    const onChangeTaskTitle = (title: string) => {
                        props.editTaskTitle(title, props.todolistID, elem.id)
                    }
                    return (
                        <li key={elem.id} className={elem.isDone ? s.isDone : ""}>
                            <UniversalButton name={''} image={del} callback={onClickDelHandler} buttonStyle={'delete'}/>
                            <UniversalCheckbox checked={elem.isDone}
                                               callback={(isDone) => onChangeStatusHandler(isDone)}/>
                            <EditableSpan title={elem.title} changeTitle={onChangeTaskTitle}/>
                        </li>
                    )
                })}

            </ul>}

            <div>
                <UniversalButton name={'All'} callback={onClickALLHandler}
                                 buttonStyle={buttonName === 'all' ? 'active' : ''}/>
                <UniversalButton name={'Active'} callback={onClickActiveHandler}
                                 buttonStyle={buttonName === 'active' ? 'active' : ''}/>
                <UniversalButton name={'Completed'} callback={onClickCompletedHandler}
                                 buttonStyle={buttonName === 'completed' ? 'active' : ''}/>
            </div>
        </div>
    )
}
