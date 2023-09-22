import React, {useEffect, useRef, useState} from "react"
import BadgerMessage from "./BadgerMessage"
import {Form, Button} from "react-bootstrap";

export default function BadgerChatroom(props) {

    const [messages, setMessages] = useState([]);
    const newPostRef = useRef({"title": "", "content": ""});

    const loadMessages = () => {
        fetch(`https://cs571.org/s23/hw6/api/chatroom/${props.name}/messages`, {
            headers: {
                "X-CS571-ID": "bid_2b48c7a36a98db55355d"
            }
        }).then(res => res.json()).then(json => {
            setMessages(json.messages)
        })
    };

    useEffect(() => {
        loadMessages()
    }, [props]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        newPostRef.current[name] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://www.cs571.org/s23/hw6/api/chatroom/${props.name}/messages`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "X-CS571-ID": "bid_2b48c7a36a98db55355d",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPostRef.current)
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        });
    }

    return <>
        <h1>{props.name} Chatroom</h1>
        {/* TODO: Allow an authenticated user to create a post. */}
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor={"newMessageTitle"}>New Message Title</Form.Label>
                <Form.Control type={"text"} placeholder={"New Message Title"} name={"title"} id={"newMessageTitle"}
                              onChange={handleInputChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor={"newMessageContent"}>New Message Content</Form.Label>
                <Form.Control type={"text"} placeholder={"New Message Content"} name={"content"}
                              id={"newMessageContent"}
                              onChange={handleInputChange}></Form.Control>
            </Form.Group>
            <Button type={"submit"}>Add a new message</Button>
        </Form>

        <hr/>
        {messages.length > 0 ? <>
            {messages.map(message => <BadgerMessage id={message.id} poster={message.poster}
                                                    title={message.title} content={message.content}
                                                    chatroom={message.chatroom} created={message.created}/>)}
        </> : <>
            <p>There are no messages in this chatroom yet!</p>
        </>}
    </>
}