const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formElements = form.elements;

  const data = {};

  const emailValue = formElements.email.value.trim();
  const passwordValue = formElements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  data.email = emailValue;
  data.password = passwordValue;

  console.log(`email: ${emailValue}, password: ${passwordValue}`);
  console.log(data);

  form.reset();
});
