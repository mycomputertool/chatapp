document.addEventListener("DOMContentLoaded", function() {
  const chatWindow = document.getElementById("chat-window");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function() {
    const message = messageInput.value.trim();
    if (message !== "") {
      appendMessage("You", message);
      messageInput.value = "";
    }
  });

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});
