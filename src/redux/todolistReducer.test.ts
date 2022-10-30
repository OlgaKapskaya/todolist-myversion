import {v1} from "uuid";
import {TodolistsType} from "../App";
import {
    AddTodolistActionCreator,
    ChangeFilterActionCreator, ChangeTodolistTitleActionCreator,
    DeleteTodolistActionCreator,
    todolistReducer
} from "./todolistReducer";

// beforeEach(() => {})

test('delete todolist', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state: TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const startState = state
    const endState = todolistReducer(startState, DeleteTodolistActionCreator(todolistID1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistID2)
})
test('add new todolist', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let todolistID3 = v1();
    let state: TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const newTodolistTitle = 'new todolist'
    const startState = state
    const endState = todolistReducer(startState, AddTodolistActionCreator(todolistID3,newTodolistTitle))

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(endState[0].id).toBe(todolistID3)
})
test ('change todolist filter', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state: TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    const startState = state
    const endState = todolistReducer(startState, ChangeFilterActionCreator(todolistID1, 'active'))

    expect(endState.length).toBe(2)
    expect(endState[0].filter).toBe('active')
    expect(endState[1].filter).toBe('all')
})
test('change todolist title', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let state: TodolistsType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
    const changedTitle = 'this todolist is changed'
    const startState = state
    const endState = todolistReducer(startState, ChangeTodolistTitleActionCreator(todolistID1, changedTitle))

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe(changedTitle)
    expect(endState[1].title).toBe('What to buy')
})
