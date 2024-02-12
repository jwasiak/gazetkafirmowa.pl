import { showInfo, showError } from "../Notification/handlers"

const form = document.querySelector("form") as HTMLFormElement;
const email = document.querySelector("input[name='email']") as HTMLInputElement;
const message = document.querySelector(
  "textarea[name='message']"
) as HTMLTextAreaElement;
const emailError = document.querySelector("input[name='email'] + p.help")!;
const messageError = document.querySelector(
  "textarea[name='message'] + p.help"
)!;

const submitHandler = (ev) => {
  ev.preventDefault();
  showFormErrors();
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    return;
  }
  if (message.validity.valid) {
    messageError.textContent = "";
  } else {
    return;
  }
  const data = new FormData(form);
  const protection = data.get("protection") as string;
  if (protection.length) return;
  data.delete("protection");
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        showInfo("Wiadomość została wysłana.");
        form.reset();
      } else {
        showError("Wystąpił problem z wysłaniem wiadomości.")
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const showFormErrors = () => {
  if (email.validity.valueMissing) {
    emailError.textContent = "Proszę podać e-mail";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Błędny adres e-mail.";
  }
  if (message.validity.valueMissing) {
    messageError.textContent = "Proszę wpisać wiadomość";
  } else if (message.validity.tooShort) {
    messageError.textContent = `Wiadomość powinna zawierać przynajmniej ${message.minLength} znaków.`;
  }
};

form.addEventListener("submit", submitHandler);
