import { checkLoggedUser, registerUser } from "./auth.js";

checkLoggedUser();

const d = document;

const $registerForm = d.getElementById('register-form');

$registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData($registerForm);
  const userData = Object.fromEntries(formData);

  if (userData.password !== userData['confirm-password']) {
    alert('Passwords do not match!');
    return;
  }

  const result = await registerUser(userData);
  const { data, errors } = result;

  if (data) {
    window.location.href = '/excercice-test/account/login.html';
  } else if (errors) {
    alert(`Error: ${errors[0].message}`);
  }
});

