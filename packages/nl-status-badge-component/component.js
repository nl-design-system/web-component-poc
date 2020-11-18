export class NLStatusBadgeElement extends HTMLElement {

	constructor() {
		super()
	}

	setClassNames (el, status, outline) {
		const STATUS_BADGE_CLASS = 'nl-status-badge';

		if(el) {
			el.classList.add(STATUS_BADGE_CLASS);

			el.classList.forEach(className => {
				if(className !== STATUS_BADGE_CLASS) {
					el.classList.remove(className);
				}
			});

			el.classList.add(`${STATUS_BADGE_CLASS}--${status}`);

			if(outline) {
				el.classList.add(`${STATUS_BADGE_CLASS}--outline`);
			}
		}

	}

    render(status, outline) {
		const span = document.createElement('span');
		const slot = document.createElement('slot');

		const styleLink = document.createElement('link');
		styleLink.href="./style.css"
		styleLink.setAttribute('rel', 'stylesheet');

		span.appendChild(styleLink);
		span.appendChild(slot);

		this.setClassNames(span, this.getAttribute('status'), this.hasAttribute('outline'))

		if(this.shadow) {
			this.shadow.appendChild(span);
        }
    }

    connectedCallback() {
		this.shadow = this.shadow || this.attachShadow({mode: 'open'});
        this.render();
    }

    static get observedAttributes() {
        return ['status', 'outline'];
    }

    attributeChangedCallback(name) {
		if(this.shadow) {
			if (name === 'status' || name === 'outline') {
				this.setClassNames(this.shadow.firstElementChild, this.getAttribute('status'), this.hasAttribute('outline'))
			}
		}
    }
}
