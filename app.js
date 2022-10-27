const emailField = document.getElementById("email");
const response = document.getElementById("response");
const button = document.getElementById("submit-button");

button.addEventListener('click', function () {
    const email = emailField.value;
    if (validateEmail(email)) {
        response.innerHTML = '';
      } else {
        response.innerHTML = 'Please provide a valid email address.';
      }
    });
 
  function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}