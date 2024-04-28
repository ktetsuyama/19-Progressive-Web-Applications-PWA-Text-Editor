const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	event.preventDefault();
	installBtn.style.visibility = "visible";
	textHeader.textContent = "Click the button to install!";

	// A click event handler on the `butInstall` element
	butInstall.addEventListener("click", async () => {
		event.prompt();
		installBtn.setAttribute("disabled", true);
		installBtn.textContent = "Installed!";
	});
});

// A handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
	textHeader.textContent = "Successfully installed!";
	console.log("👍", "appinstalled", event);
});
