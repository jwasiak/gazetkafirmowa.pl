const notification = document.querySelector("div.notification")!;

export const showInfo = (message: string) => {
  notification.classList.remove("hidden");
  notification.classList.add("is-success");
  notification.appendChild(document.createTextNode(message));
};

export const showError = (message: string) => {
  notification.classList.remove("hidden");
  notification.classList.add("is-danger");
  notification.appendChild(document.createTextNode(message));
};
