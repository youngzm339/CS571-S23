import React, {useEffect, useState} from "react"
import BadgerMessage from "./BadgerMessage"

export default function BadgerChatroom(props) {

    const [messages, setMessages] = useState([]);

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

    return <>
        <h1>{props.name} Chatroom</h1>
        {/* TODO: Allow an authenticated user to create a post. */}
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