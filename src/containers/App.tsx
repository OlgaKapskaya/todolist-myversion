import React from "react";
import "./App.css";
import {Todolist} from "../components/Todolist/Todolist";
import {Input} from "../components/Input/Input";
import {useTodolists} from "./hooks/useTodolists";


function App() {
    const {todolists, addTodolist, changeTodolistFilter} = useTodolists()

    return (
        <>
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
        </>
    );
}

export default App;
