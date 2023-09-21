import React, {useRef, useState} from 'react';
import {Form, Button, Alert} from "react-bootstrap";

export default function BadgerRegister() {
    const [alertMsg, setAlertMsg] = useState("");
    const [alertVariant, setAlertVariant] = useState("");

    const newUsernameRef = useRef(null);
    const newPasswordRef = useRef(null);
    const newPassword2Ref = useRef(null);
    const checkFormValid = () => {
        const username = newUsernameRef.current.value;
        const password = newPasswordRef.current.value;
        const confirmPassword = newPassword2Ref.current.value;

        if (!username || !password || !confirmPassword) {
            alert("You must provide both a username and password!");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Your passwords do not match!");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return false;
        }

        return true;
    };

    const handleRegisterUser = (event) => {
        event.preventDefault();
        if (checkFormValid()) {
            const newUser = {
                "username": newUsernameRef.current.value, "password": newPasswordRef.current.value,
            }
            fetch('https://www.cs571.org/s23/hw6/api/register', {
                method: "POST", headers: {
                    "X-CS571-ID": "bid_2b48c7a36a98db55355d", "Content-Type": "application/json"
                }, body: JSON.stringify(newUser)
            }).then(res => {
                if (res.status === 200) {
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
        <h1>Register</h1>
        {alertMsg ? <Alert variant={alertVariant}>
            {alertMsg}
        </Alert> : <></>}

        <Form onSubmit={handleRegisterUser}>
            <Form.Group>
                <Form.Label htmlFor={"username"}>Username</Form.Label>
                <Form.Control type="text" id="username" placeholder="Username" ref={newUsernameRef}/>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label htmlFor={"password"}>Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password" ref={newPasswordRef}/>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label htmlFor={"password2"}>Confirm Password</Form.Label>
                <Form.Control type="password" id="password2" placeholder="Confirm Password" ref={newPassword2Ref}/>
            </Form.Group>
            <br/>
            <Button variant="primary" type={"submit"}>Register</Button>
        </Form>

    </>
}