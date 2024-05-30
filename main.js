import { bots } from "./src/apis/bot.config";
import { addMessage } from "./src/components/messages";
import { home } from "./src/pages/home";
import "./src/styles/style.css";

document.querySelector("#app").appendChild(home());

const messageContainer = document.getElementById("messages");

const sendMessage = async () => {
  const chatInput = document.getElementById("chatInput");
  const messageText = chatInput.value;
  const selectedBotName = document.querySelector("#selectedBot").innerText;

  // Permet d'ajouter un message à la conversation
  if (messageText && selectedBotName) {
    addMessage(messageContainer, "You", messageText, true);

    // Permet de répondre à la commande directement
    const bot = bots.find((b) => b.name === selectedBotName);
    if (bot) {
      // Permet de séparer la commande des arguments et de répondre avec les méthodes du bot (model)
      const [command, ...args] = messageText.split(" ");
      const botResponse = await bot.respondToCommand(command, args);
      addMessage(messageContainer, bot.name, botResponse, false);
    }
  }

  // Vide le champ de saisie
  chatInput.value = "";
};

document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("chatInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
