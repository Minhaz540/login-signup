var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

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
