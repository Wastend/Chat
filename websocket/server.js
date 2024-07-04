const ws = require('ws');

let users = []

const wss = new ws.Server({
    port: 5000,
}, () => console.log(`Server started on 5000`))


wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message)

        switch (message.event) {
            case 'message':
                broadcastMessageChanel(message, ws, false)
                break;
            case 'connection':
                broadcastMessageChanel(message, ws, true)
                users = [...users, {id: message.id, chanel: message.chanelId, ws}]
                break;
            case 'close':
                broadcastMessageChanel(message, ws, false)
                users = users.filter(user => user.id !== message.id);
                break;
        }
    })
})

function broadcastMessageChanel(message, NewUser, needSend) {
    wss.clients.forEach(client => {
        const [userId] = users.filter(user => (user.ws === client && user.chanel === message.chanelId))
        if (
            client.readyState === ws.OPEN && 
            (
                (userId !== undefined) 
                || (client === NewUser && needSend)
            )
        ) {
            client.send(JSON.stringify(message));
        }
    })
}
