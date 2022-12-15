import React, {useEffect} from 'react';
import './App.css';
import {todolistAPI} from "../api/todolistAPI";

function App() {
    useEffect(() => {
        todolistAPI.getTodolists()
            .then(res => console.log(res.data))
        // todolistAPI.getTasks('5d726c53-7d05-4422-ba9c-7f1cec581efc')
        //     .then(res => console.log(res.data))
    }, [])
    return (
        <div>
        </div>
    );
}

export default App;
