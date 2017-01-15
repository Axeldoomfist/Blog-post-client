function main(form) {
	const xhr = new XMLHttpRequest();
	// Define Variables
	const user = {};
	user.username = form.usr.value;
	user.password = form.pswd.value;
	user.email = form.email.value;
	user.name = form.name.value;
	const send = JSON.stringify(user);
	xhr.open('PUT', "//127.0.0.1:5000/usr", true);
	xhr.send(send);
	xhr.addEventListener("readystatechange", processRequest, true);
	xhr.onreadystatechange = processRequest;

	function processRequest(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			const response = JSON.parse(xhr.responseText);
			document.getElementById('uid').innerHTML = response.user_id;
		}
	}

	alert(send);
}
