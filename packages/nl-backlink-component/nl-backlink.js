const BACKLINK_CLASS = 'nl-backlink';

const createBacklinkIcon = () => {
    const icon = document.createElement('svg');
    const svgTemplate = document.createElement('use');

    svgTemplate.setAttribute('href', '#icon--backlink');
    icon.appendChild(svgTemplate);
    
    icon.classList.add(`${BACKLINK_CLASS}__icon`);
    icon.setAttribute('viewBox','33 0 32 32')
    icon.setAttribute('height', '32')
    icon.setAttribute('width', '32')

    return icon;
}


const createBacklinkText = (...childNodes) => {
    const linkText = document.createElement('span')
    linkText.classList.add(`${BACKLINK_CLASS}__text`)

    if(typeof content === 'string') {
        linkText.textContent = content || '';
    }

    console.log('Append child nodes', childNodes)
    childNodes.forEach(node => linkText.appendChild(node));

    return linkText;
};

export class NLBacklinkHTMLElement extends HTMLAnchorElement{
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

export class NLBacklinkElement extends HTMLElement {
    constructor() {
        super()
    }

    render() {
        if(this.shadow) {
            const linkText = createBacklinkText(document.createElement('slot'));

            this.anchor = document.createElement('a');
            this.anchor.href = this.getAttribute('href') || '';
            this.anchor.classList.add(BACKLINK_CLASS);

            this.anchor.appendChild(createBacklinkIcon());
            this.anchor.appendChild(linkText);        
            
            this.shadow.appendChild(this.anchor);
        }
    }

    connectedCallback() {
        this.shadow = this.shadow || this.attachShadow({mode: 'open'});
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