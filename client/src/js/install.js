const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	event.preventDefault();
	butInstall.style.visibility = "visible"; // Fixed variable name
	butInstall.textContent = "Install"; // Reset button text
	textHeader.textContent = "Click the button to install!";

	// A click event handler on the `butInstall` element
	butInstall.addEventListener("click", async () => {
		event.prompt(); // Use the `event` object passed to the event listener
		butInstall.setAttribute("disabled", true);
		butInstall.textContent = "Installing..."; // Update button text
	});
});

// A handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
	textHeader.textContent = "Successfully installed!";
	console.log("👍", "appinstalled", event);
});
