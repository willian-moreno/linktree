;(() => {
	handleSwitchThemeEvents()
	handleDefaultTheme()
	handleFooterCurrentYear()

	setTimeout(() => {
		document.body.style.opacity = "1"
	}, 1000)
})()

function handleSwitchThemeEvents() {
	/**
	 * @type {HTMLInputElement | null}
	 */
	const switchTheme = document.getElementById("switch-toggle-theme")

	if (!switchTheme) return

	switchTheme.addEventListener("change", (event) => toggleTheme(event))
	switchTheme.addEventListener("keydown", (event) => {
		event.stopPropagation()
		const { key, target } = event
		if (key === "Enter") {
			target.checked = !target.checked
			toggleTheme(event)
		}
	})
}

/**
 * @param {Event} event
 */
function toggleTheme(event) {
	event.stopPropagation()
	const { target } = event

	if (target.checked) {
		document.documentElement.classList.remove("dark")
		return
	}

	document.documentElement.classList.add("dark")
}

function handleDefaultTheme() {
	/**
	 * @type {HTMLInputElement | null}
	 */
	const switchTheme = document.getElementById("switch-toggle-theme")

	if (!switchTheme) return

	if (isSystemThemeDark()) {
		document.documentElement.classList.add("dark")
		switchTheme.checked = false
		return
	}

	document.documentElement.classList.remove("dark")
	switchTheme.checked = true
}

function isSystemThemeDark() {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return true
	}

	return false
}

function handleFooterCurrentYear() {
	document.body.querySelector(".wrapper-footer .footer-year").innerHTML = new Date().getFullYear()
}
