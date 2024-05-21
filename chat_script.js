function sendMessage() {
    var message = document.getElementById('message-input').value;
    
    if (message.trim() !== '') {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = '<strong>You:</strong> ' + message;

        document.getElementById('chat-messages').appendChild(messageElement);
        document.getElementById('message-input').value = '';
    }
}
