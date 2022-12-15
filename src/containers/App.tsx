import React, {useEffect} from "react";
import "./App.css";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {getTodolictsTC} from "../bll/reducers/todolistsReducer";


function App() {
    const dispatch = useAppDispatch()
    const todolists = useAppSelector(state => state.todolists)

    useEffect(() => {
        dispatch(getTodolictsTC())
    }, [])

    return (
        <>

        </>
    );
}

export default App;
