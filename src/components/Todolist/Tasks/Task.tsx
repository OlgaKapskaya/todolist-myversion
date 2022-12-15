import React, {FC} from "react";
import {TaskType} from "../../../common/types/types";
import {useAppDispatch} from "../../../common/hooks/hooks";
import {Accordion, ListGroup, Tooltip} from "react-bootstrap";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line";

type TaskPropsType = {
    task: TaskType
    todolistID: string
}
export const Task: FC<TaskPropsType> = ({
                                            task,
                                            todolistID
                                        }) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <Accordion>
                <Accordion.Header style={{textAlign: "right"}}>
                    <RiDeleteBin6Line/>
                    {task.title}
                </Accordion.Header>

                <Accordion.Body>
                    {task.description}
                    <ListGroup variant="flush">
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