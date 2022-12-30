import React, {FC, useEffect} from "react";
import {Todolist} from "./Todolist/Todolist";
import {Input} from "../../common/components/Input/Input";
import {useTodolists} from "../../app/hooks/useTodolists";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getTodolictsTC} from "../../bll/reducers/todolistsReducer";

export const TodolistList: FC = () => {
    const {todolists, addTodolist, changeTodolistFilter} = useTodolists()

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getTodolictsTC())
        }
    }, [])

    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    !isLoggedIn && navigate('/login')

    return (
        <div>
            <header className="AppHeader">
                <Input label="Add todolist" addItem={addTodolist}/>
            </header>
            <div className="App">

                {
                    todolists.map(elem => <Todolist todolist={elem}
                                                    changeTodolistFilter={changeTodolistFilter}
                                                    key={elem.id}
                    />)
                }
            </div>
        </div>
    )
}