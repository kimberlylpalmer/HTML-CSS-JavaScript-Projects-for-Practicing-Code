const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Good Job", "Oh No!", "That's Not Right", "Hooray!"];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 9000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
