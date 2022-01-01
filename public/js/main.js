// Tooltip [Bootstrap]
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

// custom scripts

function enableCheckPasswordAndEyeBtn() {
	const checkPassword = document.getElementsByClassName("checkPassword")[0];
	let value = document.getElementById("floatingPassword").value;
	let eyeBtn = document.getElementById("togglePassword");
	if (value.length > 0) {
		checkPassword.disabled = false;
		eyeBtn.style.display = "block";
	} else {
		checkPassword.value = "";
		checkPassword.disabled = true;
		eyeBtn.style.display = "none";
	}
}

function trackEyeBtn() {
	let valueLogin = document.getElementById("floatingPassword").value;
	let eyeBtnLogin = document.getElementById("togglePassword");
	if (valueLogin.length > 0) {
		eyeBtnLogin.style.display = "block";
	} else {
		eyeBtnLogin.style.display = "none";
	}
}

// password visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector(".opPassword");

togglePassword.addEventListener("click", function (e) {
	// toggle the type attribute
	const type =
		password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute("type", type);
	// toggle the eye / eye slash icon
	this.classList.toggle("bi-eye");
});

// form validation
function isValidateForm() {
	const password = document.querySelector(".containing-eye input");
	const confirmPassword = document.querySelector(".confirm-password input");
	const errorMsg = document.querySelector(".error-password-matched");
	if (password.value !== confirmPassword.value) {
		errorMsg.style.display = "block";
		return false;
	}
	errorMsg.style.display = "none";
	return true;
}
function validateForm() {
	const password = document.querySelector(".containing-eye input");
	const confirmPassword = document.querySelector(".confirm-password input");
	const notValid = document.querySelectorAll(":invalid");
	const valid = document.querySelectorAll(":valid");
	for (let i = 0; i < valid.length; i++) {
		valid[i].classList.remove("is-invalid");
		valid[i].classList.add("is-valid");
	}
	for (let i = 0; i < notValid.length; i++) {
		notValid[i].classList.add("is-invalid");
	}
	if (
		password.value === confirmPassword.value &&
		password.value.isNotEmpty() &&
		confirmPassword.value.isNotEmpty()
	) {
		togglePassword.style.right = "30px";
		password.classList.remove("is-invalid");
		password.classList.add("is-valid");
		confirmPassword.classList.remove("is-invalid");
		confirmPassword.classList.add("is-valid");
	} else {
		togglePassword.style.right = "30px";
		password.classList.remove("is-valid");
		password.classList.add("is-invalid");
		confirmPassword.classList.remove("is-valid");
		confirmPassword.classList.add("is-invalid");
	}
}
