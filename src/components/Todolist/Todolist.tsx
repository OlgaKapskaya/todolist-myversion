import React, {FC, useCallback, useEffect} from "react";
import {FilterType, TaskStatuses, TaskType} from "../../common/types/types";
import {Button, Card} from "react-bootstrap";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {Task} from "./Tasks/Task";
import {setTasksTC} from "../../bll/reducers/tasksReducer";
import s from "./Todolist.module.css"
import {changeTodolistTitleTC, deleteTodolictsTC} from "../../bll/reducers/todolistsReducer";
import {EditSpan} from "../EditSpan/EditSpan";

type TodolistType = {
    todolistID: string
    title: string
    filter: FilterType
}
export const Todolist: FC<TodolistType> = ({
                                               todolistID,
                                               title,
                                               filter
                                           }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setTasksTC(todolistID))
    }, [todolistID, dispatch])

    let tasks = useAppSelector<TaskType[]>(state => state.tasks[todolistID])
    if (filter === "active") {
        tasks = tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (filter === "completed") {
        tasks = tasks.filter(t => t.status === TaskStatuses.Completed);
    }
    const onClickDeleteHandler = (): void => {
        dispatch(deleteTodolictsTC(todolistID))
    }
    const changeTodolistTitle = useCallback((title: string): void => {
        dispatch(changeTodolistTitleTC(todolistID, title))
    }, [dispatch])
    return (
            <div className={s.container}>
                <Card style={{width: "100%"}}>
                    <Card.Header style={{textAlign: "right"}}>
                        <RiDeleteBin6Line onClick={onClickDeleteHandler} className={s.deleteButton}/>
                        <Card.Title style={{textAlign: "left"}}>
                            <EditSpan title={title} onChangeText={changeTodolistTitle}/>
                        </Card.Title>
                    </Card.Header>

                    <Card.Body>
                        {
                            tasks
                            && tasks.map(elem => <Task task={elem}
                                                       key={elem.id}
                                                       todolistID={todolistID}/>)
                        }

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-primary" size="sm">all</Button>
                        <Button variant="outline-primary" size="sm">active</Button>
                        <Button variant="outline-primary" size="sm">completed</Button>
                    </Card.Footer>
                </Card>

            </div>
    )
}