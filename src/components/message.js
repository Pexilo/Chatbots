export const message = (sender, text, timestamp) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = `
  <div class="message-container">
      <div class="sender">${sender}   <span class="timestamp">${timestamp}</span></div>
      <span class="text">${text}</span>
  </div>
    `;
  return messageDiv;
};
