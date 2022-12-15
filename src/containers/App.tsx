import React, {useEffect} from "react";
import "./App.css";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {getTodolictsTC} from "../bll/reducers/todolistsReducer";
import {Todolist} from "../components/Todolist/Todolist";


function App() {
    const dispatch = useAppDispatch()
    const todolists = useAppSelector(state => state.todolists)

    useEffect(() => {
        dispatch(getTodolictsTC())

    }, [])

    return (
        <div className="App">
            {todolists && todolists.map(elem => <Todolist todolistID={elem.id}
                                                          key={elem.id}
                                                          title={elem.title}
                                                          filter={elem.filter}/>)
            }
        </div>
    );
}

export default App;
