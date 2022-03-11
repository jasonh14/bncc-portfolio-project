const submitForm = (event) => {
  event.preventDefault();
  const inputField = document.querySelectorAll(".input-field");

  inputField.forEach((input) => {
    input.value = "";
  });
};
