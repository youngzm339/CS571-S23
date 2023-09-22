import React, {useState} from "react"
import {Button} from "react-bootstrap"

function BadgerMessage(props) {

    const [isDisplayed, setIsDisplayed] = useState(true);
    const handleDelMessage = () => {
        fetch(`https://www.cs571.org/s23/hw6/api/chatroom/${props.chatroom}/messages/${props.id}`, {
            method: "DELETE",
            credentials: 'include',
            headers: {
                "X-CS571-ID": "bid_2b48c7a36a98db55355d",
                "Content-Type": "application/json",
            }
        }).then(res => {
            if (res.status === 200) {
                setIsDisplayed(false);
            }
            return res.json();
        }).then(data => {
            console.log(data);
        });
    }

    const dt = new Date(props.created);

    return <>
        {
            isDisplayed ? <>
                <h2>{props.title}</h2>
                <sub>Posted on {dt.toLocaleDateString()} at {dt.toLocaleTimeString()}</sub>
                <br/><br/>
                <i>{props.poster}</i>
                <p>{props.content}</p>
                <Button variant={"danger"} onClick={handleDelMessage}>删除</Button></> : <></>
        }
    </>
}

export default BadgerMessage;