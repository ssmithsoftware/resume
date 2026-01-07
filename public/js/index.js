// Update current company date
function updateCurrentTime() {
	const currentTime = document.querySelector('[data-current]')
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	const now = new Date()

	const year = now.getFullYear()
	const month = now.getMonth()
	const monthName = months[month]

	currentTime.dateTime = `${year}-${String(month + 1).padStart(2, '0')}`
	currentTime.textContent = `${monthName} ${year}`
}

document.addEventListener('DOMContentLoaded', updateCurrentTime)

// Custom SVG Element used to clean inline markup
const svgTemplate = document.getElementById('svgs')

class SVGElement extends HTMLElement {
	connectedCallback() {
		this.replaceChildren(
			svgTemplate.content
				.getElementById(this.dataset.children)
				.cloneNode(true)
		)
	}
}

customElements.define('s-svg', SVGElement)

// Add listener to copy password text to clipboard
function addCopyListener() {
	const passwordText = document.querySelector('[data-password]').textContent
	const copyBtn = document.querySelector('[data-copy]')

	async function copyText(event) {
		event.currentTarget.blur()

		await navigator.clipboard.writeText(passwordText)
	}

	copyBtn.addEventListener('click', copyText)
}

document.addEventListener('DOMContentLoaded', addCopyListener)
