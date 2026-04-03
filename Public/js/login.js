const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submitBtn');
const successOverlay = document.getElementById('successOverlay');

// Live validation clear
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
passwordInput.addEventListener('input', () => clearError(passwordInput, passwordError));

function clearError(input, errorEl) {
  input.classList.remove('invalid');
  errorEl.classList.remove('visible');
}

function showError(input, errorEl) {
  input.classList.add('invalid');
  errorEl.classList.add('visible');
}

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const USERS = {
  'recrutador@upt.pt': { password: '12345', dashboard: '/recrutador' },
  'developer@upt.pt':  { password: '12345', dashboard: '/developer' },
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let valid = true;

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    showError(emailInput, emailError);
    valid = false;
  }
  if (password.length < 1) {
    showError(passwordInput, passwordError);
    valid = false;
  }

  if (!valid) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'A entrar…';

  await new Promise(r => setTimeout(r, 900));

  const user = USERS[email];

  if (!user || user.password !== password) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Entrar';
    showError(emailInput, emailError);
    emailError.textContent = 'Email ou palavra-passe incorretos.';
    showError(passwordInput, passwordError);
    passwordError.textContent = ' ';
    return;
  }

  // Correto — mostra sucesso e redireciona
  successOverlay.classList.add('show');
  await new Promise(r => setTimeout(r, 1200));
  window.location.href = user.dashboard;
});