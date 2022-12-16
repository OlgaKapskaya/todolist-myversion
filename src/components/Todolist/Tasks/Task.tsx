import React, {FC} from "react";
import {TaskType} from "../../../common/types/types";
import {useAppDispatch} from "../../../common/hooks/hooks";
import {Accordion, ListGroup} from "react-bootstrap";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line";
import {deleteTaskTC, updateTaskTC} from "../../../bll/reducers/tasksReducer";
import s from "./Task.module.css"
import {EditSpan} from "../../EditSpan/EditSpan";

type TaskPropsType = {
    task: TaskType
}
export const Task: FC<TaskPropsType> = ({
                                            task
                                        }) => {
    const dispatch = useAppDispatch()
    const deleteTask = (): void => {
        dispatch(deleteTaskTC(task.todoListId, task.id))
    }
    const updateTaskTitle = (title: string): void => {
        dispatch(updateTaskTC(task.todoListId, task.id, {title}))
    }
    return (
        <>
            <Accordion>
                <Accordion.Header className={s.accHeader}>
                    <RiDeleteBin6Line onClick={deleteTask} className={s.deleteButton}/>
                    {task.title}
                </Accordion.Header>

                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Title: <EditSpan title={task.title} onChangeText={updateTaskTitle}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {task.description ? task.description : "none"}
                        </ListGroup.Item>
                        <ListGroup.Item>Status: {task.status}</ListGroup.Item>
                        <ListGroup.Item>Priority: {task.priority}</ListGroup.Item>
                        <ListGroup.Item>Start date: {task.startDate}</ListGroup.Item>
                        <ListGroup.Item> Deadline: {task.deadline}</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion>
        </>
    )
}