import React, {useContext, useEffect, useState} from 'react';
import LoginStateContext from "../contexts/LoginStateContext";
import {Alert} from "react-bootstrap";

export default function BadgerLogout() {
    const [alertMsg, setAlertMsg] = useState("");
    const [alertVariant, setAlertVariant] = useState("");
    const [isLogin, setIsLogin] = useContext(LoginStateContext)
    useEffect(() => {
        fetch('https://cs571.org/s23/hw6/api/logout', {
            method: 'POST',
            headers: {
                "X-CS571-ID": "bid_2b48c7a36a98db55355d"
            },
            credentials: "include"
        }).then(res => {
            if (res.status === 200) {
                setIsLogin(false);
                setAlertVariant("success");
            } else {
                setAlertVariant("danger");
            }
            return res.json();
        }).then(json => {
            console.log(json);
            setAlertMsg(json.msg);
        })
    }, []);

    return <>
        <h1>Logout</h1>
        {alertMsg ? <Alert variant={alertVariant}>
            {alertMsg}
        </Alert> : <></>}
    </>
}