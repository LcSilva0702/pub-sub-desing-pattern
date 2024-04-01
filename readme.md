para conectar utilize o node em um terminal

reinicie apagando o ipc q é gerado

comando para dar no terminal node

cosnt net = require('net')

const nomeAleatorio = net.connect('path')


Para se inscrever em um canal faça:
nomeAleatorio.write('sub_channel')

Para receber as mensagens com um cliente é preciso fazer a conexão em data:
nomeAleatorio.on('data', (data) => console.log(`messsage: ${data.toString()}`));

Para publicar em um canal faça: 
nomeAleatorio.write('pub_channel_message')