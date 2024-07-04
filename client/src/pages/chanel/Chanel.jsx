import React, { useState, useRef, useEffect } from 'react';

function Chanel(props) {

    const [messages, setMessages] = useState([]);
    const socket = useRef()
    const [user, setUser] = useState({name:'myname', id:Date.now()})
    const chanelId = window.location.href.split('chanel/')[1]

    function connect() {
        if (socket.current === undefined) {
            socket.current = new WebSocket('ws://localhost:5000')

            socket.current.onopen = () => {
                const message = {
                    event: 'connection',
                    name: user.name,
                    id: user.id,
                    chanelId
                }
                socket.current.send(JSON.stringify(message))
            }
            socket.current.onmessage = (event) => {
                const message = JSON.parse(event.data)
                setMessages(prev => [message, ...prev])
                if(message.event === 'close' && message.id === user.id) {
                    socket.current.close();
                }
            }
            socket.current.onclose = () => {
                console.log('disconnected');
            }
            socket.current.onerror = () => {
                console.log('Socket произошла ошибка')
            }
        }
    }

    useEffect(() => {
        connect()
    }, [])

    window.onunload = function(){
        const message = {
            event: 'close',
            name: user.name,
            id: user.id,
            chanelId
        }
        socket.current.send(JSON.stringify(message))
    };

    return (
        <div id='chat'>
            {messages.map(mess =>
                <div key={mess.id}>
                    {mess.event === 'connection'
                        ? <div className="connection_message">
                            Пользователь {mess.name} подключился
                        </div>
                        : mess.event === 'close' ?
                            <div className="connection_message">
                                Пользователь {mess.name} Отключился
                            </div>
                            :
                            <div className="message">
                                {mess.name}. {mess.message}
                            </div>
                    }
                </div>
            )}
        </div>
    );
}

export default Chanel;