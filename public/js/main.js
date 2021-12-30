// Tooltip [Bootstrap]
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

// custom scripts
const checkPassword = document.getElementsByClassName("checkPassword")[0];

function enableCheckPasswordAndEyeBtn() {
	let value = document.getElementById("floatingPassword").value;
	let eyeBtn = document.getElementById("togglePassword");
	if (value.length > 0) {
		checkPassword.disabled = false;
		eyeBtn.style.display = "block";
	} else {
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

// error page
function type(n, t) {
	var str = document.getElementsByTagName("code")[n].innerHTML.toString();
	var i = 0;
	document.getElementsByTagName("code")[n].innerHTML = "";

	setTimeout(function () {
		var se = setInterval(function () {
			i++;
			document.getElementsByTagName("code")[n].innerHTML =
				str.slice(0, i) + "|";
			if (i == str.length) {
				clearInterval(se);
				document.getElementsByTagName("code")[n].innerHTML = str;
			}
		}, 10);
	}, t);
}

type(0, 0);
type(1, 600);
type(2, 1300);
