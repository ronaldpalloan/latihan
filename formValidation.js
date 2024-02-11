const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const allInput = form.querySelectorAll('input');

form.addEventListener('submit', e => {
	e.preventDefault();

	validateInputs();
})

function inputError(element, message) {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

function inputSuccess(element) {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
}

function validateInputs() {
	const usernameValue = username.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const password2Value = password2.value;

	if (usernameValue === '') {
		inputError(username, 'Username is required');
	} else {
		inputSuccess(username);
	}

	if (emailValue === '') {
		inputError(email, 'Email is required');
	} else if (!isValidEmail(emailValue)) {
		inputError(email, 'Provide a valid email address');
	} else {
		inputSuccess(email);
	}

	if (passwordValue === '') {
		inputError(password, 'Password is required');
	} else {
		inputSuccess(password);
	}

	if (password2Value === '') {
		inputError(password2, 'This field is required');
	} else if (password2Value !== passwordValue) {
		inputError(password2, 'Your password doesn\'t match');
	} else {
		inputSuccess(password2);
	}
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}