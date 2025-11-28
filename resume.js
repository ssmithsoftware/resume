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
