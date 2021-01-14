import style from './style.js';

const BACKLINK_CLASS = 'nl-backlink';
const BACKLINK_ICON_ID = 'nl-icon-backlink';

const getBacklinkIcon = () => document.getElementById(BACKLINK_ICON_ID);

const handleNoIconFound = () => {
  console.warn(
    `No svg with the id ${BACKLINK_ICON_ID} found. Please add it as a hidden component to your application.`,
  );
};

const createBacklinkIcon = () => {
  const hasBacklinkIcon = getBacklinkIcon();
  if (!hasBacklinkIcon) {
    handleNoIconFound();
  }

  const iconSize = !hasBacklinkIcon ? '0' : '';

  const icon = `<svg xmlns="http://www.w3.org/2000/svg" class="${BACKLINK_CLASS}__icon" viewBox="0 0 32 32" height="${iconSize}" width="${iconSize}" focusable="false">
    <use href="#${BACKLINK_ICON_ID}">
  </svg>`;

  const iconTemplate = document.createElement('template');
  iconTemplate.innerHTML = icon;

  return iconTemplate.content;
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

  // TODO: This should not be a copy of style.css
  getStyles() {
    return style;
  }

  render() {
    const backlinkIcon = getBacklinkIcon();

    if (this.shadow) {
      //FIXME: should be solved with some type of css import or relative dependency
      const style = document.createElement('style');
      style.textContent = this.getStyles();

      const linkText = createBacklinkText(document.createElement('slot'));

      if (backlinkIcon) {
        const icon = backlinkIcon.cloneNode(true);
        this.shadow.appendChild(icon);
      }

      this.anchor = document.createElement('a');
      this.anchor.href = this.getAttribute('href') || '';
      this.anchor.classList.add(BACKLINK_CLASS);

      this.anchor.appendChild(style);
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
