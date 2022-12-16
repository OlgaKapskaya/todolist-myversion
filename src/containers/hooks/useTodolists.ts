import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {useCallback, useEffect} from "react";
import {addTodolistTC, changeTodolistFilterAC, getTodolictsTC} from "../../bll/reducers/todolistsReducer";
import {FilterType} from "../../common/types/types";


export const useTodolists = () => {
    const dispatch = useAppDispatch()
    const todolists = useAppSelector(state => state.todolists)
    useEffect(() => {
        dispatch(getTodolictsTC())
    }, [dispatch])

    const addTodolist = useCallback((title: string): void => {
        dispatch(addTodolistTC(title))
    }, [dispatch])

    const changeTodolistFilter = useCallback((todolistID: string, filter: FilterType): void => {
        dispatch(changeTodolistFilterAC(todolistID, filter))
    }, [dispatch])

    return {todolists, addTodolist, changeTodolistFilter}
}
