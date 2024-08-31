function openChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.querySelector('.chatbot-messages');
    const userMessage = input.value.trim();

    if (userMessage) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `User: ${userMessage}`;
        messages.appendChild(messageElement);
        input.value = '';

        // Simulate chatbot response
        const responseElement = document.createElement('div');
        responseElement.textContent = 'Chatbot: How can I help you today?';
        messages.appendChild(responseElement);
    }
}
