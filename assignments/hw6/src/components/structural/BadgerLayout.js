import React, {useEffect, useContext} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import LoginStateContext from "../contexts/LoginStateContext";

import crest from '../../assets/uw-crest.svg'

function BadgerLayout(props) {

    const [isLogin, setIsLogin] = useContext(LoginStateContext);
    useEffect(() => {
        fetch('https://cs571.org/s23/hw6/api/whoami', {
            method: "GET",
            headers: {
                "X-CS571-ID": "bid_2b48c7a36a98db55355d", "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.status === 200) {
                setIsLogin(true);
            }
        })
    }, [setIsLogin]);


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="BadgerChat Logo"
                            src={crest}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        BadgerChat
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {isLogin ? <Nav.Link as={Link} to="logout">Logout</Nav.Link> : <>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link as={Link} to="register">Register</Nav.Link>
                        </>}

                        <NavDropdown title="Chatrooms">
                            {
                                props.chatrooms.map(chatroom =>
                                    <NavDropdown.Item as={Link}
                                                      to={"/chatrooms/" + chatroom}>{chatroom}</NavDropdown.Item>
                                )
                            }
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <div className="body-spacer">
                <Outlet/>
            </div>
        </div>
    );
}

export default BadgerLayout;