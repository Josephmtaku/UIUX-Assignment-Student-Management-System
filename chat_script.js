function sendMessage() {
    // Get the message input value
    var message = document.getElementById('message-input').value;
    
    if (message.trim() !== '') {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = '<strong>You:</strong> ' + message;

        // Append the message to the chat messages container
        document.getElementById('chat-messages').appendChild(messageElement);

        // Clear the message input
        document.getElementById('message-input').value = '';
    }
}
