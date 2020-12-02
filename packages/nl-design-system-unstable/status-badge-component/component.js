import style from './style.js';

export class NLStatusBadgeElement extends HTMLElement {
  constructor() {
    super();
  }

  // TODO: This should not be a copy of style.css
  getStyles() {
    return style;
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
