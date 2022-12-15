import React, {useCallback, useEffect} from "react";
import "./App.css";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {addTodolistTC, getTodolictsTC} from "../bll/reducers/todolistsReducer";
import {Todolist} from "../components/Todolist/Todolist";
import {Input} from "../components/Input/Input";


function App() {
    const dispatch = useAppDispatch()
    const todolists = useAppSelector(state => state.todolists)

    useEffect(() => {
        dispatch(getTodolictsTC())

    }, [])

    const addTodolist = useCallback((title: string): void => {
        dispatch(addTodolistTC(title))
    }, [dispatch])

    return (
        <>
            <header className="AppHeader">
                <Input label="Add todolist" addItem={addTodolist}/>
            </header>
            <div className="App">

                {todolists && todolists.map(elem => <Todolist todolistID={elem.id}
                                                              key={elem.id}
                                                              title={elem.title}
                                                              filter={elem.filter}/>)
                }
            </div>
        </>
    );
}

export default App;
