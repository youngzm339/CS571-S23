import React, {useContext, useRef, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import LoginStateContext from "../contexts/LoginStateContext";

export default function BadgerLogin() {
    const [alertMsg, setAlertMsg] = useState("");
    const [alertVariant, setAlertVariant] = useState("");
    const [, setIsLogin] = useContext(LoginStateContext);

    const newUsernameRef = useRef(null);
    const newPasswordRef = useRef(null);
    const checkFormValid = () => {
        const username = newUsernameRef.current.value;
        const password = newPasswordRef.current.value;

        if (!username || !password) {
            alert("You must provide both a username and password!");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return false;
        }

        return true;
    };
    const handleLoginUser = (event) => {
        event.preventDefault();
        if (checkFormValid()) {
            const newUser = {
                "username": newUsernameRef.current.value, "password": newPasswordRef.current.value,
            }
            fetch('https://www.cs571.org/s23/hw6/api/login', {
                method: "POST", headers: {
                    "X-CS571-ID": "bid_2b48c7a36a98db55355d", "Content-Type": "application/json",
                    credentials: 'include'
                }, body:
                    JSON.stringify(newUser)
            }).then(res => {
                if (res.status === 200) {
                    setIsLogin(true);
                    setAlertVariant("success");
                } else {
                    setAlertVariant("danger");
                }
                return res.json();
            }).then(data => {
                console.log(data);
                setAlertMsg(data.msg);
            }).catch((error) => {
                console.error("An error occurred:", error);
            })
        }
    }
    return <>
        <h1>Login</h1>
        {alertMsg ? <Alert variant={alertVariant}>
            {alertMsg}
        </Alert> : <></>}
        <Form onSubmit={handleLoginUser}>
            <Form.Group>
                <Form.Label htmlFor={"username"}>Username</Form.Label>
                <Form.Control type="text" id="username" placeholder="Username" ref={newUsernameRef}/>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor={"password"}>Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password" ref={newPasswordRef}/>
            </Form.Group>
            <br/>
            <Button variant="primary" type={"submit"}>Login</Button>
        </Form>
    </>
}