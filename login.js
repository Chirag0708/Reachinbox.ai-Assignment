// login.js
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Use Google Login API to authenticate the user
  // Redirect to onebox screen upon successful login
  window.location.href = '/google-login';
});