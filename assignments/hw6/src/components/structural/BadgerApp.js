import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {LoginStateProvider} from "../contexts/LoginStateContext";
import BadgerLayout from './BadgerLayout';
import BadgerLogin from '../auth/BadgerLogin';
import BadgerRegister from '../auth/BadgerRegister';
import BadgerLogout from '../auth/BadgerLogout';
import BadgerChatroom from '../content/BadgerChatroom';
import BadgerChatHome from '../content/BadgerChatHome';
import BadgerNoMatch from '../content/BadgerNoMatch';

function BadgerApp() {

    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/s23/hw6/api/chatroom', {
            headers: {
                "X-CS571-ID": "bid_2b48c7a36a98db55355d",
            }
        }).then(res => res.json()).then(json => {
            setChatrooms(json)
        })
    }, []);

    return (
        <LoginStateProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BadgerLayout chatrooms={chatrooms}/>}>
                        <Route index element={<BadgerChatHome/>}/>
                        <Route path="/login" element={<BadgerLogin/>}></Route>
                        <Route path="/register" element={<BadgerRegister/>}></Route>
                        <Route path="/logout" element={<BadgerLogout/>}></Route>
                        {
                            chatrooms.map(chatroom => {
                                return <Route key={chatroom} path={`chatrooms/${chatroom}`}
                                              element={<BadgerChatroom name={chatroom}/>}/>
                            })
                        }
                        <Route path="*" element={<BadgerNoMatch/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </LoginStateProvider>
    );
}

export default BadgerApp;
