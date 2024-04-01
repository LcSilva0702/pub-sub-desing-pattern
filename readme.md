1. (Caso tenha criado uma conexão anterior)Reiniciando e apagando o IPC:

    Abra o terminal e navegue até a pasta do seu projeto Node.
    Execute o seguinte comando para reiniciar o servidor Node e apagar o arquivo IPC:
    ```
    rm -f ipc (Linux)
    ```
2. Usando o código JavaScript no node terminal:
    ```   
    const net = require('net');

    const nomeAleatorio = net.connect('path');

    // Inscrever-se em um canal
    nomeAleatorio.write('sub_channel');

    // Receber mensagens
    nomeAleatorio.on('data', (data) => console.log(`Mensagem: ${data.toString()}`));

    // Publicar em um canal
    nomeAleatorio.write('pub_channel_message');
    ```
Explicação do código:

    const net = require('net'): Importa o módulo net do Node, que fornece APIs para comunicação de rede.
    const nomeAleatorio = net.connect('path'): Cria uma conexão com um servidor Node em um caminho específico. A variável nomeAleatorio armazena o objeto de conexão.
    nomeAleatorio.write('sub_channel'): Envia uma mensagem para o servidor Node para se inscrever em um canal específico.
    nomeAleatorio.on('data', (data) => console.log(Mensagem: ${data.toString()})): Escuta por eventos de "data" e imprime a mensagem recebida no console.
    nomeAleatorio.write('pub_channel_message'): Envia uma mensagem para o servidor Node para publicar uma mensagem em um canal específico.
