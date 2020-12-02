const BACKLINK_CLASS = 'nl-backlink';

const createBacklinkIcon = () => {
  const iconTemplate = `<svg xmlns="http://www.w3.org/2000/svg" class="${BACKLINK_CLASS}__icon" viewBox="0 0 32 32">
		<g id="icon--backlink">
			<path d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"/>
		</g>
	</svg>`;

  const template = document.createElement('template');
  template.innerHTML = iconTemplate;

  const icon = template.content;

  return icon;
};

const createBacklinkText = (...childNodes) => {
  const linkText = document.createElement('span');
  linkText.classList.add(`${BACKLINK_CLASS}__text`);

  childNodes.forEach((node) => linkText.appendChild(node));

  return linkText;
};

// Will be used as an element extention, it will not use shadowDOM as interactive elements cannot use it
export class NLBacklinkHTMLElement extends HTMLAnchorElement {
  constructor() {
    super();
  }

  render() {
    this.classList.add(BACKLINK_CLASS);
    this.appendChild(createBacklinkText(...this.childNodes));
    this.insertBefore(createBacklinkIcon(), this.firstChild);
  }

  connectedCallback() {
    this.render();
  }
}

// Will be used as a custom component and thus use shadowDOM and include the a element wrapper
export class NLBacklinkElement extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    if (this.shadow) {
      //FIXME: should be solved with some type of css import or relative dependency
      const styleLink = document.createElement('link');
      styleLink.href = './style.css';
      styleLink.setAttribute('rel', 'stylesheet');

      const linkText = createBacklinkText(document.createElement('slot'));

      this.anchor = document.createElement('a');
      this.anchor.href = this.getAttribute('href') || '';
      this.anchor.classList.add(BACKLINK_CLASS);

      this.anchor.appendChild(styleLink);
      this.anchor.appendChild(createBacklinkIcon());
      this.anchor.appendChild(linkText);

      this.shadow.appendChild(this.anchor);
    }
  }

  connectedCallback() {
    this.shadow = this.shadow || this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['href'];
  }

  attributeChangedCallback(name) {
    if (name === 'href') {
      if (this.anchor) {
        this.anchor.href = this.getAttribute('href');
      }
    }
  }
}
