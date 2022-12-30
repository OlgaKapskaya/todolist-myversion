import React, {FC} from "react";
import {Button, Container, Navbar} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {logoutTC} from "../../../bll/reducers/authReducer";

export const NavBar: FC = () => {
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Todolist App</Navbar.Brand>
                {isLoggedIn && <Button onClick={logOutHandler}> Log out</Button>}
            </Container>
        </Navbar>
    )
}