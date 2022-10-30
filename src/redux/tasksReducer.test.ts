import {v1} from "uuid";
import {
    AddTaskActionCreator, AddTaskListActionCreator,
    ChangeTaskStatusActionCreator,
    DeleteTaskActionCreator, DeleteTaskListActionCreator,
    EditTaskTitleActionCreator,
    tasksReducer
} from "./tasksReducer";

test('task title must be changed', () => {
    let todolistID1 = v1();
    let taskID1 = v1();
    let taskID2 = v1();
    let state = {
        [todolistID1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true},
        ]
    }
    let newState = tasksReducer(state, EditTaskTitleActionCreator(todolistID1, taskID1, 'REACT'))

    expect(newState[todolistID1].length).toBe(2)
    expect(newState[todolistID1][0].title).toBe('REACT')
    expect(newState[todolistID1][1].title).toBe('JS')
    expect(newState[todolistID1][1]).toBe(state[todolistID1][1])
})
test('remove task from array', () => {
    let todolistID1 = v1();
    let taskID1 = v1();
    let taskID2 = v1();
    let state = {
        [todolistID1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true},
        ]
    }

    let newState = tasksReducer(state, DeleteTaskActionCreator(todolistID1, taskID1))

    expect(newState[todolistID1].length).toBe(1)
    expect(newState[todolistID1][0].id).toBe(taskID2)
})
test('add new task to the beginning of the array', () => {
    let todolistID1 = v1();
    let taskID1 = v1();
    let taskID2 = v1();
    let state = {
        [todolistID1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true},
        ]
    }
    let newState = tasksReducer(state, AddTaskActionCreator(todolistID1, 'new task'))

    expect(newState[todolistID1].length).toBe(3)
    expect(newState[todolistID1][0].title).toBe("new task")
    expect(newState[todolistID1][1].title).toBe("HTML&CSS")
    expect(newState[todolistID1][2].title).toBe("JS")
    expect(newState[todolistID1][1]).toBe(state[todolistID1][0])
    expect(newState[todolistID1][2]).toBe(state[todolistID1][1])
})
test('task status must be changed', () => {
    let todolistID1 = v1();
    let taskID1 = v1();
    let taskID2 = v1();
    let state = {
        [todolistID1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true},
        ]
    }
    let newState = tasksReducer(state, ChangeTaskStatusActionCreator(todolistID1, taskID1, false))

    expect(newState[todolistID1].length).toBe(2)
    expect(newState[todolistID1][0].isDone).toBe(false)
    expect(newState[todolistID1][1].isDone).toBe(true)
    expect(newState[todolistID1][1]).toBe(state[todolistID1][1])
})
test('add new empty task list', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let taskID1 = v1();
    let taskID2 = v1();
    let state = {
        [todolistID1]: [
            {id: taskID1, title: "HTML&CSS", isDone: true},
            {id: taskID2, title: "JS", isDone: true},
        ]
    }
    let newState = tasksReducer(state, AddTaskListActionCreator(todolistID2))

    expect(newState).not.toBe(state)
    expect(newState).not.toEqual(state)
    expect(newState[todolistID1]).toBe(state[todolistID1])
    expect(newState[todolistID2].length).toBe(0)
})
test('remove task list', () => {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let state = {
        [todolistID1]: [
            {id: 'taskID1', title: "HTML&CSS", isDone: true},
            {id: 'taskID2', title: "JS", isDone: true},
        ],
        [todolistID2]: [
            {id: 'taskID3', title: "React", isDone: false},
            {id: 'taskID4', title: "CSS", isDone: true},
        ]
    }
    let newState = tasksReducer(state, DeleteTaskListActionCreator(todolistID1))

    expect(newState).not.toBe(state)
    expect(newState).not.toEqual(state)
    expect(newState[todolistID1]).not.toBeDefined()
    expect(state[todolistID1]).toBeDefined()
})