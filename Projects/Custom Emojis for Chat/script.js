function toggleEmojiPicker() {
    const emojiList = document.getElementById('emojiList');
    emojiList.classList.toggle('hidden');
}

function addEmoji(emoji) {
    const chatMessages = document.querySelector('.chat-messages');
    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = emoji;
    chatMessages.appendChild(emojiSpan);
}

// Example: Listen for Enter key to send a message
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value;
        if (message) {
            addMessage(message);
            messageInput.value = '';
        }
    }
});
