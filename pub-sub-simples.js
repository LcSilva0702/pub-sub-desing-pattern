const net = require('net')
const path = require('path')

const socket = path.resolve(__dirname, 'ipc')

const server = net.createServer().listen(socket, () => {
    console.log("Pub Sub test")
})

const subscribeChannels = {}

function subscribe(channel, socket) {
    if(!subscribeChannels[channel]){
        subscribeChannels[channel] = []
    }

    console.log(`Subscribe to channel ${channel}`)
    subscribeChannels[channel].push(socket)
}

function publish(channel, message){
    if(!subscribeChannels[channel]) { return; }

    for (const socket of subscribeChannels[channel]){
        socket.write(message)
    }
}

const regexes = {
    sub: /^sub_(.*)$/,
    pub: /^pub_(.*)_(.*)$/
}

server.on('connection', (socket) => {
    console.log('New socket connection')


    socket.on("data", (data) => {
        const message = data.toString()
        const matchSub = message.match(regexes.sub)
        const matchPub = message.match(regexes.pub)

        if(matchSub && matchSub[1]){
            subscribe(matchSub[1], socket)
            return;
        }

        if(matchPub && matchPub[1]){
            const channel = matchPub[1];
            const message = matchPub[2];

            publish(channel, message)
            return;
        }

        console.error(new Error(`Vagabundo escreve direito ${message}`))
    })
})