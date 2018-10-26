// создать подключение
let socket = new WebSocket("ws://localhost:3000");

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function() {
    let outgoingMessage = this.message.value;

    socket.send(outgoingMessage);
    console.log("\x1b[42m","Исходящее сообщение => " + outgoingMessage);
    return false;
};

// обработчик входящих сообщений
socket.onmessage = function(event) {
    console.log("\x1b[42m","Входящее сообщение => " + event);
    let incomingMessage = event.data;
    showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
    let messageElem = document.createElement('div');
    messageElem.appendChild(document.createTextNode(message));
    document.getElementById('subscribe').appendChild(messageElem);
}