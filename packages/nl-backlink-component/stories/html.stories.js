import '../extend.js';
import '../style.css';
import DOMPurify from 'dompurify';
import { getBacklinkStories } from './getBacklinkStories';

const Template = ({ href, content }) => `<a is="nl-html-backlink" href="${href}">${DOMPurify.sanitize(content)}</a>`;
const { config, Complex, Simple } = getBacklinkStories({ prefix: 'HTML', Template });

export default config;
export { Simple, Complex };
