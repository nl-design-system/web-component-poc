export class NLStatusBadgeElement extends HTMLElement {
  constructor() {
    super();
  }

  // TODO: This should not be a copy of style.css
  getStyles() {
    return `
			.nl-status-badge {
				--nl-status-badge-background-color: lightgrey;
				--nl-status-badge-color: black;

				box-sizing: border-box;
				padding-block-start: var(--nl-status-badge-padding-block, 0);
				padding-block-end: var(--nl-status-badge-padding-block, 0);
				padding-inline-start: var(--nl-status-badge-padding-inline, 0);
				padding-inline-end: var(--nl-status-badge-padding-inline, 0);
				border-radius: var(--nl-status-badge-border-radius, 0);
				text-transform: var(--nl-status-badge-text-transform, inherit);
				font-family: var(--nl-status-badge-font-family, inherit);
				font-weight: var(--nl-status-badge-font-weight, inherit);
				font-size: var(--nl-status-badge-font-size, 0.75rem);
				vertical-align: middle;
				background-color: var(--nl-status-badge-background-color);
				color: var(--nl-status-badge-color);
			}

			.nl-status-badge--success {
				background-color: var(--nl-status-badge-success-background-color, var(--nl-status-fill-success-color, var(--nl-status-badge-background-color)));
				color: var(--nl-status-badge-success-color, var(--nl-status-badge-success-color, var(--nl-status-badge-color)));
			}

			.nl-status-badge--warning {
				background-color: var(--nl-status-badge-warning-background-color, var(--nl-status-fill-warning-color, var(--nl-status-badge-background-color)));
				color: var(--nl-status-badge-warning-color, var(--nl-status-badge-warning-color, var(--nl-status-badge-color)));
			}

			.nl-status-badge--error {
				background-color: var(--nl-status-badge-error-background-color, var(--nl-status-fill-error-color, var(--nl-status-badge-background-color)));
				color: var(--nl-status-badge-error-color, var(--nl-status-badge-error-color, var(--nl-status-badge-color)));
		}
		`;
  }

  setClassNames(el, status, outline) {
    const STATUS_BADGE_CLASS = 'nl-status-badge';

    if (el) {
      el.classList.add(STATUS_BADGE_CLASS);

      el.classList.forEach((className) => {
        if (className !== STATUS_BADGE_CLASS) {
          el.classList.remove(className);
        }
      });

      el.classList.add(`${STATUS_BADGE_CLASS}--${status}`);

      if (outline) {
        el.classList.add(`${STATUS_BADGE_CLASS}--outline`);
      }
    }
  }

  render() {
    const span = document.createElement('span');
    const slot = document.createElement('slot');

    const style = document.createElement('style');
    style.textContent = this.getStyles();

    span.appendChild(style);
    span.appendChild(slot);

    this.setClassNames(span, this.getAttribute('status'), this.hasAttribute('outline'));

    if (this.shadow) {
      this.shadow.appendChild(span);
    }
  }

  connectedCallback() {
    this.shadow = this.shadow || this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['status', 'outline'];
  }

  attributeChangedCallback(name) {
    if (this.shadow) {
      if (name === 'status' || name === 'outline') {
        this.setClassNames(this.shadow.firstElementChild, this.getAttribute('status'), this.hasAttribute('outline'));
      }
    }
  }
}
